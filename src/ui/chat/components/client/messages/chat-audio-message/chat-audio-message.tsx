/** biome-ignore-all lint/a11y/useMediaCaption: false positive */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: false positive */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: false positive */
'use client';

import type { ChatAudioMessageProps } from './chat-audio-message.props';
import { useRef, useState, useMemo } from 'react';
import { MdPause, MdPlayArrow } from 'react-icons/md';
import { useQuery } from '@tanstack/react-query';

import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';
import { ChatMessageSkeleton } from '@gnetwork-ui/components/organisms/skeletons/chat-message-skeleton';
import { getChatAudioByIdQuery } from '@module-chat/infrastructure/queries/get-chat-audio-by-id.query';
import { queryKeysDictionary } from '@ui-chat/dictionaries/query-keys.dictionary';

const formatTime = (seconds: number): string => {
  if (Number.isNaN(seconds) || !Number.isFinite(seconds)) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

export const ChatAudioMessage = ({
  direction,
  // eslint_disable-next-line @typescript-eslint/no-unused-vars
  filename: _filename,
  // eslint_disable-next-line @typescript-eslint/no-unused-vars
  mimeType: _mimeType,
  mediaId = '',
  time,
  username,
  ...rest
}: Readonly<ChatAudioMessageProps>) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Generamos alturas aleatorias para las ondas (Waveform) una sola vez
  const bars = useMemo(
    () => Array.from({ length: 35 }, () => Math.floor(Math.random() * 60) + 20),
    [],
  );

  const {
    data: audioUrl,
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryKeysDictionary.GET_CHAT_AUDIO_BY_ID, mediaId],
    queryFn: () => getChatAudioByIdQuery(mediaId),
    enabled: !!mediaId,
  });

  const handlePlayPause = () => {
    if (isPlaying) audioRef.current?.pause();
    else void audioRef.current?.play();
  };

  const _handleSeek = (index: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    const pct = index / bars.length;
    audio.currentTime = pct * audio.duration;
  };

  if (isLoading)
    return (
      <ChatMessageSkeleton
        direction={direction}
        time={time}
        username={username}
      />
    );
  if (error || !audioUrl) return null;

  return (
    <ChatMessage
      direction={direction}
      time={time}
      username={username}
      {...rest}
    >
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={() => {
          const audio = audioRef.current;
          if (audio) {
            setCurrentTime(audio.currentTime);
            setProgress((audio.currentTime / audio.duration) * 100);
          }
        }}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration ?? 0)}
        onPlay={(e) => {
          setIsPlaying(true);
          const audios = document.querySelectorAll('audio');
          audios.forEach((audio) => {
            if (audio !== e.target) {
              audio.pause();
            }
          });
        }}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
          setIsPlaying(false);
          setProgress(0);
        }}
        preload="metadata"
      />

      <div className="flex flex-col gap-0.5 p-1 rounded-xl min-w-[150px] max-w-[300px]">
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePlayPause}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e9edef] text-[#444444] hover:bg-white transition-all shadow-sm"
          >
            {isPlaying ? (
              <MdPause size={22} />
            ) : (
              <MdPlayArrow size={22} className="ml-0.5" />
            )}
          </button>

          <div className="flex flex-1 items-center gap-[1.5px] h-7 cursor-pointer relative overflow-hidden">
            {bars.map((height, i) => {
              const barProgress = (i / bars.length) * 100;
              const isPlayed = progress > barProgress;

              return (
                <div
                  key={i}
                  className="w-[2px] rounded-full transition-colors duration-200"
                  style={{
                    height: `${height}%`,
                    backgroundColor: isPlayed ? '#ffffff' : '#8696a0',
                  }}
                />
              );
            })}

            <div
              className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white shadow-md z-10 transition-all duration-100"
              style={{ left: `calc(${progress}% - 3px)` }}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <span className="text-[10px] text-white/80 font-medium tabular-nums">
            {formatTime(currentTime > 0 ? currentTime : duration)}
          </span>
        </div>
      </div>
    </ChatMessage>
  );
};
