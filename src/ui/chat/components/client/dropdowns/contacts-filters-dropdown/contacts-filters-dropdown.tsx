'use client';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';
import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';

import { CHAT_CONTACT_PLATFORMS_SELECT_OPTIONS } from '@ui-chat/constants/chat-contact-platforms-select-options.constant';
import { CHAT_CONVERSATION_STATUS_SELECT_OPTIONS } from '@ui-chat/constants/chat-conversation-status-select-options.constant';

import { ContactsFiltersDropdownTrigger } from './components/contacts-filters-dropdown-trigger';

import { useContactsFiltersDropdownTrigger } from './components/contacts-filters-dropdown-trigger/contacts-filters-dropdown-trigger.hook';

/**
 * @name ContactsFiltersDropdown
 *
 * @description This component is used to render the contacts filters dropdown.
 *
 * TODO: Put all value using a constant or enum
 */
export const ContactsFiltersDropdown = () => {
  const {
    changePlatformFilter,
    changeStatusFilter,
    isContactsFiltersOpen,
    platformFilter,
    setIsContactsFiltersOpen,
    statusFilter,
  } = useContactsFiltersDropdownTrigger();

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
          Plataforma
        </Text>
        <SelectInput
          onValueChange={changePlatformFilter}
          options={CHAT_CONTACT_PLATFORMS_SELECT_OPTIONS}
          triggerLabel="Plataforma"
          triggerWrapperClassName="min-h-8 min-w-[140px]"
          value={platformFilter}
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
    </Dropdown>
  );
};
