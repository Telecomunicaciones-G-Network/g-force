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

  const handleClientClick = (client: (typeof clients)[0]) => {
    onClientSelect(client.id, client.fullName, client.contracts);
    setSearchTerm(client.fullName); // Dejamos el nombre seleccionado en el input
    setIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Si el usuario borra el texto, limpiar la selección
    if (value === '') {
      onClientSelect('', '', []);
      setIsOpen(false);
    }
  };

  const handleSearchClick = () => {
    if (searchTerm.length >= 2) {
      setIsOpen(true);
    }
  };

  return (
    <div className={styles.base}>
      <div className={styles.base__input_wrapper}>
        <input
          className={styles.base__input}
          onBlur={() => {
            // Un pequeño delay para permitir que el click en el dropdown funcione
            setTimeout(() => setIsOpen(false), 200);
          }}
          onChange={handleChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault(); // Prevenir submit del formulario padre
              handleSearchClick();
            }
          }}
          placeholder="Buscar Cliente"
          type="text"
          value={searchTerm}
        />
        <button
          type="button"
          className={styles.base__icon}
          onMouseDown={(e) => {
            e.preventDefault(); // Prevenir que se dispare el onBlur del input
            handleSearchClick();
          }}
        >
          <MdSearch size={20} />
        </button>
      </div>

      {isOpen && searchTerm && (
        <div className={styles.base__dropdown}>
          {isLoading && (
            <div className={styles.base__loading}>
              <Text as="span" level="small" scheme="label">
                Buscando...
              </Text>
            </div>
          )}

          {!isLoading && clients.length === 0 && (
            <div className={styles.base__empty}>
              <Text as="span" level="small" scheme="label">
                No se encontraron clientes
              </Text>
            </div>
          )}

          {!isLoading &&
            clients.length > 0 &&
            clients.map((client, index) => (
              <button
                key={`${client.id}-${index}`}
                className={styles.base__item}
                onClick={() => handleClientClick(client)}
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
