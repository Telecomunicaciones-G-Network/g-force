'use client';

import { useTable } from '@gnetwork-ui/components/organisms/tables/table/table.hook';

import { TABLE_RECORD_LIMIT_PER_PAGE } from '@ui-core/constants/table-record-limit-per-page.constant';

import { useGetAgentsQuery } from '@ui-chat/queries/get-agents-query.hook';

/**
 * @name useChatManagementAgentsTableHook
 *
 * @description Hook to manage the chat management agents table.
 *
 * @return data - The data for the table.
 * @return goToNextPage - The function to call when the next page is clicked.
 * @return goToPage - The function to call when the page is clicked.
 * @return goToPreviousPage - The function to call when the previous page is clicked.
 * @return isError - Whether the table has an error.
 * @return isLoading - Whether the table is loading.
 * @return limit - The limit of the table.
 * @return onSearch - The function to call when the search is changed.
 * @return page - The current page.
 * @return pageIndex - The current page index.
 * @return searchValue - The current search value.
 * @return setPageIndex - The function to call when the page index is changed.
 * @return totalRegisters - The total number of registers.
 */
export const useChatManagementAgentsTableHook = () => {
  const {
    debouncedSearchValue,
    goToNextPage,
    goToPage,
    goToPreviousPage,
    onSearch,
    page,
    pageIndex,
    searchValue,
    setPageIndex,
  } = useTable();

  const { data, isError, isLoading } = useGetAgentsQuery({
    limit: String(TABLE_RECORD_LIMIT_PER_PAGE),
    page: page?.toString(),
    search: debouncedSearchValue?.trim() || undefined,
  });

  return {
    data: data?.agents ?? [],
    goToNextPage,
    goToPage,
    goToPreviousPage,
    isError,
    isLoading,
    limit: TABLE_RECORD_LIMIT_PER_PAGE,
    onSearch,
    page,
    pageIndex,
    searchValue,
    setPageIndex,
    totalRegisters: data?.count ?? 0,
  };
};
