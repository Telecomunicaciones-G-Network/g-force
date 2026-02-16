'use client';

import type {
  ContactPlatform,
  ConversationStatus,
} from '@module-chat/domain/types';

import { useRouter, useSearchParams } from 'next/navigation';

import { ContactPlatforms } from '@module-chat/domain/enums/contact-platforms.enum';
import { ConversationStatus as ConversationStatusValues } from '@module-chat/domain/enums/conversation-status.enum';

import { useDropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown/dropdown.hook';

const PLATFORM_QUERY_KEY = 'platform';
const ALL_VALUE = 'ALL';
const STATUS_QUERY_KEY = 'status';

const VALID_PLATFORMS = new Set<string>(
  Object.values(ContactPlatforms) as string[],
);

const VALID_STATUSES = new Set<string>(
  Object.values(ConversationStatusValues) as string[],
);

/**
 * @name useContactsFiltersDropdownTrigger
 *
 * @description This hook is used to manage the state of the contacts filters dropdown trigger.
 * The platform filter is synced with the URL search params so that changing the filter
 * triggers a server refetch of contacts via the page's GetContactsQuery.
 *
 * @returns changePlatformFilter - The function to change the platform filter (updates URL and refetches).
 * @returns isContactsFiltersOpen - The state of the contacts filters dropdown trigger.
 * @returns platformFilter - The current platform filter (from URL).
 * @returns setIsContactsFiltersOpen - The function to set the state of the contacts filters dropdown trigger.
 *
 * TODO: Set ALL value as constant
 */
export const useContactsFiltersDropdownTrigger = () => {
  const { isOpen, setIsOpen } = useDropdown();

  const router = useRouter();
  const searchParams = useSearchParams();

  const platformSearchParam = searchParams.get(PLATFORM_QUERY_KEY);
  const statusSearchParam = searchParams.get(STATUS_QUERY_KEY);

  const platformFilter: ContactPlatform | typeof ALL_VALUE =
    !platformSearchParam || platformSearchParam === ALL_VALUE
      ? ALL_VALUE
      : VALID_PLATFORMS.has(platformSearchParam)
        ? (platformSearchParam as ContactPlatform)
        : ALL_VALUE;

  const statusFilter: ConversationStatus | typeof ALL_VALUE =
    !statusSearchParam || statusSearchParam === ALL_VALUE
      ? ALL_VALUE
      : VALID_STATUSES.has(statusSearchParam)
        ? (statusSearchParam as ConversationStatus)
        : ALL_VALUE;

  const changePlatformFilter = (platform: ContactPlatform | 'ALL') => {
    const next = new URLSearchParams(searchParams);

    if (platform === 'ALL') {
      next.delete(PLATFORM_QUERY_KEY);
    } else {
      next.set(PLATFORM_QUERY_KEY, platform);
    }

    router.replace(`?${next.toString()}`, { scroll: false });
  };

  const changeStatusFilter = (status: ConversationStatus | 'ALL') => {
    const next = new URLSearchParams(searchParams);

    if (status === 'ALL') {
      next.delete(STATUS_QUERY_KEY);
    } else {
      next.set(STATUS_QUERY_KEY, status);
    }

    router.replace(`?${next.toString()}`, { scroll: false });
  };

  return {
    changePlatformFilter,
    changeStatusFilter,
    isContactsFiltersOpen: isOpen,
    platformFilter,
    setIsContactsFiltersOpen: setIsOpen,
    statusFilter,
  };
};
