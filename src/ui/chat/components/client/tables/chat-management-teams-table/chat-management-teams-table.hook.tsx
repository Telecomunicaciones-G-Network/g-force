'use client';

import { useTable } from '@gnetwork-ui/components/organisms/tables/table/table.hook';

import { TABLE_RECORD_LIMIT_PER_PAGE } from '@ui-core/constants/table-record-limit-per-page.constant';

import { useGetChatTeamsQuery } from '@ui-chat/queries/get-chat-teams-query.hook';

/**
 * @name useChatManagementTeamsTableHook
 *
 * @description Hook to manage the chat management teams table.
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
export const useChatManagementTeamsTableHook = () => {
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

  const { data, isError, isLoading } = useGetChatTeamsQuery();

  // Filter teams by search value if provided
  const filteredTeams = debouncedSearchValue?.trim()
    ? (data?.teams?.filter((team) =>
        team.name.toLowerCase().includes(debouncedSearchValue.toLowerCase()),
      ) ?? [])
    : (data?.teams ?? []);

  return {
    data: filteredTeams,
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
    totalRegisters: filteredTeams.length,
  };
};
