'use client';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';
import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';

import { ContactAssignments } from '@module-chat/domain/enums/contact-assignments.enum';

import { CHAT_CONVERSATION_ASSIGNED_TO_SELECT_OPTIONS } from '@ui-chat/constants/chat-conversation-assigned-to-select-options.constant';
import { CHAT_CONVERSATION_STATUS_SELECT_OPTIONS } from '@ui-chat/constants/chat-conversation-status-select-options.constant';
import { CHAT_TEAMS_TO_SELECT_OPTIONS } from '@ui-chat/constants/chat-teams-to-select-options.constant';

import { ContactsFiltersDropdownTrigger } from './components/contacts-filters-dropdown-trigger';

import { useContactsFiltersDropdown } from './contacts-filters-dropdown.hook';

/**
 * @name ContactsFiltersDropdown
 *
 * @description This component is used to render the contacts filters dropdown.
 *
 * TODO: Put all filters on iterators or filter file
 */
export const ContactsFiltersDropdown = () => {
  const {
    assignedToFilter,
    changeAssignedToFilter,
    changeStatusFilter,
    changeTeamsFilter,
    isContactsFiltersOpen,
    setIsContactsFiltersOpen,
    statusFilter,
    teamsFilter,
  } = useContactsFiltersDropdown();

  return (
    <Dropdown
      alignOffset={-280}
      className="gap-4 min-w-[321px] p-4"
      onOpenChange={setIsContactsFiltersOpen}
      open={isContactsFiltersOpen}
      side="bottom"
      triggerComponent={
        <ContactsFiltersDropdownTrigger
          isContactsFiltersOpen={isContactsFiltersOpen}
        />
      }
    >
      <Text
        as="label"
        align="left"
        className="text-chromatic-inverted"
        level="medium"
        scheme="label"
      >
        Filtrar por
      </Text>
      <div className="flex justify-between items-center w-full">
        <Text
          as="label"
          align="left"
          className="text-neutral-500"
          level="small"
          scheme="label"
        >
          Status
        </Text>
        <SelectInput
          onValueChange={changeStatusFilter}
          options={CHAT_CONVERSATION_STATUS_SELECT_OPTIONS}
          triggerLabel="Status"
          triggerWrapperClassName="min-h-8 min-w-[140px]"
          value={statusFilter}
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <Text
          as="label"
          align="left"
          className="text-neutral-500"
          level="small"
          scheme="label"
        >
          Asignado a
        </Text>
        <SelectInput
          defaultValue={ContactAssignments.MY_TEAMS}
          onValueChange={changeAssignedToFilter}
          options={CHAT_CONVERSATION_ASSIGNED_TO_SELECT_OPTIONS}
          triggerLabel="Asignado a"
          triggerWrapperClassName="min-h-8 min-w-[140px]"
          value={assignedToFilter}
        />
      </div>
      <div className="flex justify-between items-center w-full">
        <Text
          as="label"
          align="left"
          className="text-neutral-500"
          level="small"
          scheme="label"
        >
          Equipo
        </Text>
        <SelectInput
          onValueChange={changeTeamsFilter}
          options={CHAT_TEAMS_TO_SELECT_OPTIONS}
          triggerLabel="Equipo"
          triggerWrapperClassName="min-h-8 min-w-[140px]"
          value={teamsFilter}
        />
      </div>
    </Dropdown>
  );
};
