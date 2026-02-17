'use client';

import { useEffect, useState } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { useDebounce } from '@hook/use-debounce.hook';

export const useChatListHeader = () => {
  const [contactSearchValue, setContactSearchValue] = useState<string>('');

  const router = useRouter();
  const searchParams = useSearchParams();

  const debouncedSearchValue = useDebounce(contactSearchValue, 300);

  const onContactSearchChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContactSearchValue(event.target.value);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <no apply>
  useEffect(() => {
    const next = new URLSearchParams(searchParams);

    if (!debouncedSearchValue.trim()) {
      next.delete('search');
    } else {
      next.set('search', debouncedSearchValue);
    }

    router.replace(`?${next.toString()}`, { scroll: false });
  }, [debouncedSearchValue]);

  return {
    contactSearchValue,
    onContactSearchChange,
  };
};
