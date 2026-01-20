'use client';

import type { ClientSearchDropdownProps } from './client-search-dropdown.props';
import { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { useClientSearchDropdown } from './client-search-dropdown.hook';
import styles from './client-search-dropdown.module.css';

export const ClientSearchDropdown = ({
  onClientSelect,
  selectedClientName,
}: Readonly<ClientSearchDropdownProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const { clients, isLoading, searchTerm, setSearchTerm } =
    useClientSearchDropdown();

  // Sincronizar el searchTerm con el nombre seleccionado inicialmente
  useEffect(() => {
    if (selectedClientName) {
      setSearchTerm(selectedClientName);
    }
  }, [selectedClientName, setSearchTerm]);

  const handleClientClick = (clientId: string, clientName: string) => {
    onClientSelect(clientId, clientName);
    setSearchTerm(clientName); // Dejamos el nombre seleccionado en el input
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsOpen(true);
    
    // Si el usuario borra el texto, limpiar la selección
    if (value === '') {
      onClientSelect('', '');
    }
  };

  return (
    <div className={styles.base}>
      <div className={styles.base__input_wrapper}>
        <MdSearch className={styles.base__icon} size={20} />
        <input
          className={styles.base__input}
          onBlur={() => {
            // Un pequeño delay para permitir que el click en el dropdown funcione
            setTimeout(() => setIsOpen(false), 200);
          }}
          onChange={handleChange}
          onFocus={() => {
            if (searchTerm.length > 0) setIsOpen(true);
          }}
          placeholder="Buscar Cliente"
          type="text"
          value={searchTerm} // Ahora el input siempre muestra el searchTerm
        />
      </div>

      {isOpen && searchTerm && (
        <div className={styles.base__dropdown}>
          {isLoading && (
            <div className={styles.base__loading}>
              <Text as="span" level="small" scheme="label">Buscando...</Text>
            </div>
          )}

          {!isLoading && clients.length === 0 && (
            <div className={styles.base__empty}>
              <Text as="span" level="small" scheme="label">No se encontraron clientes</Text>
            </div>
          )}

          {!isLoading && clients.length > 0 &&
            clients.map((client: any) => (
              <button
                key={client.id}
                className={styles.base__item}
                onClick={() => handleClientClick(client.id, client.fullName)}
                type="button"
              >
                <Text as="span" level="small" scheme="label">
                  {client.fullName}
                </Text>
              </button>
            ))}
        </div>
      )}
    </div>
  );
};