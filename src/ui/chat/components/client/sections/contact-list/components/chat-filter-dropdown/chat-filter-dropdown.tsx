'use client';

import { useMemo } from 'react';
import { MdFilterList } from 'react-icons/md';

import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { SelectInput } from '@gnetwork-ui/components/molecules/inputs/select-input';
import type { SelectItem } from '@gnetwork-ui/components/molecules/inputs/select-input/interface';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import type {
  AssignedToScope,
  ContactPlatform,
  ConversationStatus,
  TeamCodename,
} from '@module-chat/domain/types';

import styles from './chat-filter-dropdown.module.css';

type SelectValue = string;

export const ChatFilterDropdown = () => {
  const contacts = useContactStore((state) => state.contacts);
  const contactFilters = useContactStore((state) => state.contactFilters);
  const setContactFilters = useContactStore((state) => state.setContactFilters);

  // Platform options from available contacts
  const platformOptions: SelectItem[] = useMemo(() => {
    const values = new Set<string>();
    (contacts ?? []).forEach((c) => {
      if (c?.platform) values.add(c.platform);
    });
    const opts = Array.from(values).sort().map((v) => ({ label: v, value: v }));
    return [{ label: 'Todas', value: 'ALL' }, ...opts];
  }, [contacts]);

  // Status options from available contacts
  const statusOptions: SelectItem[] = useMemo(() => {
    const values = new Set<string>();
    (contacts ?? []).forEach((c) => {
      const status = c?.latestConversation?.status;
      if (status) values.add(status);
    });
    const opts = Array.from(values).sort().map((v) => ({ label: v, value: v }));
    return [{ label: 'Todos', value: 'ALL' }, ...opts];
  }, [contacts]);

  // Team options from available contacts
  const teamOptions: SelectItem[] = useMemo(() => {
    const values = new Map<string, string>();
    (contacts ?? []).forEach((c) => {
      const team = c?.latestConversation?.team;
      if (team?.id && team?.name) values.set(team.id, team.name);
    });
    const opts = Array.from(values.entries())
      .sort((a, b) => a[1].localeCompare(b[1]))
      .map(([id, name]) => ({ label: name, value: id }));
    
    return [{ label: 'Todos', value: 'ALL' }, ...opts];
  }, [contacts]);

  // Assignment scope options (from API specification)
  const assignedToOptions: SelectItem[] = [
    { label: 'Mis equipos', value: 'my_teams' },
    { label: 'Asignados a mí', value: 'me' },
    { label: 'Bot', value: 'bot' },
  ];

  const selectedPlatform = contactFilters.platform ?? 'ALL';
  const selectedStatus = contactFilters.status ?? 'ALL';
  const selectedTeamCodename = contactFilters.teamCodename ?? 'ALL';
  const selectedAssignedTo = contactFilters.assignedTo ?? 'my_teams';

  const handleSelectChange: {
    (name: 'platform', value: SelectValue): void;
    (name: 'status', value: SelectValue): void;
    (name: 'teamCodename', value: SelectValue): void;
    (name: 'assignedTo', value: SelectValue): void;
  } = (name, value) => {
    if (name === 'platform') {
      setContactFilters({
        platform: value === 'ALL' ? null : (value as ContactPlatform),
      });
      return;
    }

    if (name === 'status') {
      setContactFilters({
        status: value === 'ALL' ? null : (value as ConversationStatus),
      });
      return;
    }

    if (name === 'teamCodename') {
      setContactFilters({
        teamCodename: value === 'ALL' ? null : (value as TeamCodename),
      });
      return;
    }

    if (name === 'assignedTo') {
      setContactFilters({
        assignedTo: value as AssignedToScope,
      });
    }
  };

  const triggerButton = (
    <Button className="p-2 relative" isStatic aria-label="Filtrar">
      <MdFilterList />
    </Button>
  );

  return (
    <Dropdown triggerComponent={triggerButton} align="center" sideOffset={8}>
      <div className={styles.filtrarPorParent}>
        <div className={styles.filtrarPor}>Filtrar por</div>

        <div className={styles.plataformaParent}>
          <div className={styles.plataforma}>Plataforma</div>
          <div className={styles.selectWrapper}>
            <SelectInput
              value={selectedPlatform}
              onValueChange={(val) => handleSelectChange('platform', val)}
              options={platformOptions}
              fullWidth
              triggerClassName={styles.customTrigger}
            />
          </div>
        </div>

        <div className={styles.plataformaParent}>
          <div className={styles.plataforma}>Status</div>
          <div className={styles.selectWrapper}>
            <SelectInput
              value={selectedStatus}
              onValueChange={(val) => handleSelectChange('status', val)}
              options={statusOptions}
              fullWidth
              triggerClassName={styles.customTrigger}
            />
          </div>
        </div>

        <div className={styles.plataformaParent}>
          <div className={styles.plataforma}>Asignado a</div>
          <div className={styles.selectWrapper}>
            <SelectInput
              value={selectedAssignedTo}
              onValueChange={(val) => handleSelectChange('assignedTo', val)}
              options={assignedToOptions}
              fullWidth
              triggerClassName={styles.customTrigger}
            />
          </div>
        </div>

        <div className={styles.plataformaParent}>
          <div className={styles.plataforma}>Equipo</div>
          <div className={styles.selectWrapper}>
            <SelectInput
              value={selectedTeamCodename}
              onValueChange={(val) => handleSelectChange('teamCodename', val)}
              options={teamOptions}
              fullWidth
              triggerClassName={styles.customTrigger}
            />
          </div>
        </div>
      </div>
    </Dropdown>
  );
};
