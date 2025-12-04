'use client';

import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';

import { ENVS } from '@ui-core/envs/envs';

interface UseChatImageMessageProps {
  mediaId?: string;
}

const getChatImage = async (mediaId: string): Promise<string> => {
  const token = Cookies.get('token');
  const url = `${ENVS.GNETWORK_API_BASE_URL}/chat/media/${mediaId}`;

  // Validate URL
  if (!url || !mediaId) {
    throw new Error('Invalid URL or mediaId');
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'image/*',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      cache: 'no-cache',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorText = await response.text().catch(() => response.statusText);
      throw new Error(
        `Failed to fetch image: ${response.status} ${response.statusText} - ${errorText}`,
      );
    }

    // Use arrayBuffer instead of blob to avoid HTTP/2 protocol errors
    const arrayBuffer = await response.arrayBuffer();
    const blob = new Blob([arrayBuffer]);

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          resolve(reader.result as string);
        } else {
          reject(new Error('Failed to read image data'));
        }
      };

      reader.onerror = () => {
        reject(new Error('Failed to read image blob'));
      };

      reader.readAsDataURL(blob);
    });
  } catch (error) {
    if (error instanceof Error) {
      // Provide more context about the error
      if (error.name === 'AbortError') {
        throw new Error('Request timeout: Image took too long to load');
      }
      if (error.message.includes('Failed to fetch')) {
        throw new Error(
          `Network error: Unable to connect to ${url}. Check CORS, network connection, or server availability.`,
        );
      }
      throw error;
    }
    throw new Error('Unknown error while fetching image');
  }
};

export const useChatImageMessage = ({
  mediaId = '',
}: Readonly<UseChatImageMessageProps>) => {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!mediaId) {
      setImage(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    let isCancelled = false;

    setIsLoading(true);
    setError(null);

    getChatImage(mediaId)
      .then((dataUrl) => {
        if (!isCancelled) {
          setImage(dataUrl);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        if (!isCancelled) {
          const errorMessage =
            err instanceof Error ? err.message : 'Failed to load image';
          console.error(
            `[ChatImageMessage] Error loading image with mediaId ${mediaId}:`,
            errorMessage,
            {
              mediaId,
              url: `${ENVS.GNETWORK_API_BASE_URL}/chat/media/${mediaId}`,
              hasToken: !!Cookies.get('token'),
              error: err,
            },
          );
          setError(new Error(errorMessage));
          setIsLoading(false);
        }
      });

    return () => {
      isCancelled = true;
    };
  }, [mediaId]);

  return {
    image,
    isLoading,
    error,
  };
};
