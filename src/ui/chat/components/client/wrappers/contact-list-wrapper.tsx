'use client';

import { use, useEffect, useState, useTransition } from 'react';

import type { GetContactsResponse } from '@module-chat/domain/interfaces';

import { getFilteredContactsAction } from '@ui-chat/actions/get-filtered-contacts.action';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';
import { buildContactsQuery } from '@ui-chat/utils/build-contacts-query.util';

import { ContactList } from '../sections/contact-list';

interface ContactListWrapperProps {
  initialContactsPromise: Promise<GetContactsResponse>;
}

/**
 * @name ContactListWrapper
 *
 * @description Wrapper component that handles server-side filtering.
 * Listens to filter changes and fetches new contacts from the server.
 */
export const ContactListWrapper = ({
  initialContactsPromise,
}: ContactListWrapperProps) => {
  const contactFilters = useContactStore((state) => state.contactFilters);
  const [isPending, startTransition] = useTransition();

  // Use initial data from server
  const initialData = use(initialContactsPromise);
  const [contactsPromise, setContactsPromise] = useState<
    Promise<GetContactsResponse>
  >(Promise.resolve(initialData));

  // Fetch new contacts when filters change
  useEffect(() => {
    startTransition(async () => {
      const query = buildContactsQuery(contactFilters);
      const newPromise = getFilteredContactsAction(query);
      setContactsPromise(newPromise);
    });
  }, [contactFilters]);

  return (
    <>
      {isPending && (
        <div className="absolute top-2 right-2 z-50">
          <div className="bg-neutral-800 text-white px-3 py-1 rounded-md text-sm">
            Filtrando...
          </div>
        </div>
      )}
      <ContactList chatContactsResponsePromise={contactsPromise} />
    </>
  );
};
