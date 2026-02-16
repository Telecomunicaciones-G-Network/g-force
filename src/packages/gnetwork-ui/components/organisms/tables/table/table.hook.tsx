'use client';

import { useState } from 'react';

import { useDebounce } from '@hook/use-debounce.hook';

/**
 * @name useTable
 *
 * @description Hook to manage the table.
 *
 * @return goToNextPage - The function to call when the next page is clicked.
 * @return goToPage - The function to call when the page is clicked.
 * @return goToPreviousPage - The function to call when the previous page is clicked.
 * @return onSearch - The function to call when the search input changes.
 * @return page - The current page.
 * @return pageIndex - The current page index.
 * @return setPageIndex - The function to call when the page index is changed.
 * @return searchValue - The current search value (for immediate display in the search input).
 * @return debouncedSearchValue - The debounced search value (for API/queries).
 */
export const useTable = (debounceDelay = 500) => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const [searchValue, setSearchValue] = useState<string>('');

  const debouncedSearchValue = useDebounce(searchValue, debounceDelay);

  const page = pageIndex + 1;

  const goToNextPage = () => setPageIndex?.(pageIndex + 1);

  const goToPage = (page: number) => setPageIndex?.(page - 1);

  const goToPreviousPage = () => setPageIndex?.(pageIndex - 1);

  const onSearch = (search?: string) => {
    setSearchValue(search ?? '');
  };

  return {
    debouncedSearchValue,
    goToNextPage,
    goToPage,
    goToPreviousPage,
    onSearch,
    page,
    pageIndex,
    setPageIndex,
    searchValue,
  };
};
