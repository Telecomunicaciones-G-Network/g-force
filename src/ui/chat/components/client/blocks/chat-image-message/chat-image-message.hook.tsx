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

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'image/*',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }

  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      resolve(reader.result as string);
    };

    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

export const useChatImageMessage = ({
  mediaId = '',
}: Readonly<UseChatImageMessageProps>) => {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!mediaId) {
      return;
    }

    setIsLoading(true);
    setError(null);

    getChatImage(mediaId)
      .then((dataUrl) => {
        setImage(dataUrl);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err as Error);
        setIsLoading(false);
      });
  }, [mediaId]);

  return {
    image,
    isLoading,
    error,
  };
};
