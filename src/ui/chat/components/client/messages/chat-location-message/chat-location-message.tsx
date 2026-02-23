'use client';

import type { ChatLocationMessageProps } from './chat-location-message.props';

import { MdOpenInNew, MdPlace } from 'react-icons/md';

import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';

const buildMapsDeepLink = (lat: number, lng: number): string =>
  `https://www.google.com/maps?q=${lat},${lng}`;

export const ChatLocationMessage = ({
  direction,
  address,
  latitude,
  longitude,
  locationName,
  time,
  username,
  ...rest
}: Readonly<ChatLocationMessageProps>) => {
  const mapsUrl = buildMapsDeepLink(latitude, longitude);

  const displayName = locationName ?? address ?? 'Ubicación';

  return (
    <ChatMessage
      direction={direction}
      time={time}
      username={username}
      {...rest}
    >
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block min-w-[200px] max-w-[260px] cursor-pointer overflow-hidden rounded-xl -m-1"
        aria-label={`Abrir ubicación: ${displayName}`}
      >
        <div className="relative flex h-28 w-full items-center justify-center overflow-hidden bg-[#e5e3df]">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='%23000' stroke-width='1'/%3E%3C/svg%3E\")",
              backgroundSize: '20px 20px',
            }}
          />

          <div className="absolute left-[-10%] top-[40%] h-2 w-[120%] -rotate-6 bg-white/80" />
          <div className="absolute left-[60%] top-[-10%] h-[120%] w-[10px] rotate-12 bg-white/80" />
          <div className="absolute left-[60%] top-[30%] h-1.5 w-[120%] rotate-45 bg-[#f5f5f5]" />

          <div className="relative z-10 flex -translate-y-[4px] flex-col items-center">
            <MdPlace className="size-9 text-red-500 drop-shadow-md" />
            <div className="mt-0.5 flex items-center justify-center rounded-full bg-black/50 px-2.5 py-0.5 backdrop-blur-md">
              <span className="text-[9px] font-semibold tracking-wide text-white">
                Abrir mapa
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-2">
          <MdPlace className="size-5 shrink-0 text-red-400" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[13px] font-medium leading-tight">
              {displayName}
            </p>
            {address && locationName && (
              <p className="truncate text-[11px] opacity-60">{address}</p>
            )}
          </div>
          <MdOpenInNew className="size-4 shrink-0 opacity-50" />
        </div>
      </a>
    </ChatMessage>
  );
};
