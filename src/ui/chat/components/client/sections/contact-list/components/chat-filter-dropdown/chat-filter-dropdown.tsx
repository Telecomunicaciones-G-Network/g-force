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
import { cn } from '@/src/packages/gnetwork-ui/utils/cn.util';

type SelectValue = string;

export const ChatFilterDropdown = () => {
  const contacts = useContactStore((state) => state.contacts);
  const contactFilters = useContactStore((state) => state.contactFilters);
  const setContactFilters = useContactStore((state) => state.setContactFilters);


  // Platform options with Spanish labels
  const platformOptions: SelectItem[] = useMemo(() => {
    const platformLabels: Record<string, string> = {
      WHATSAPP: 'WhatsApp',
    };

    const values = new Set<string>();
    (contacts ?? []).forEach((c) => {
      if (c?.platform) values.add(c.platform);
    });
    const opts = Array.from(values)
      .sort()
      .map((v) => ({ label: platformLabels[v] || v, value: v }));
    return [{ label: 'Todas', value: 'ALL' }, ...opts];
  }, [contacts]);

  // Status options with Spanish labels
  const statusOptions: SelectItem[] = useMemo(() => {
    const statusLabels: Record<string, string> = {
      ASSIGNED: 'Asignado',
      FINISHED: 'Finalizado',
      WAITING: 'En espera',
    };

    const values = new Set<string>();
    (contacts ?? []).forEach((c) => {
      const status = c?.latestConversation?.status;
      if (status) values.add(status);
    });

    const opts = Array.from(values)
      .sort()
      .map((v) => ({
        label: statusLabels[v] || v,
        value: v,
      }));

    return [{ label: 'Todos', value: 'ALL' }, ...opts];
  }, [contacts]);

  // Team options with Spanish labels
  const teamOptions: SelectItem[] = useMemo(() => {
    const teamLabels: Record<string, string> = {
      CUSTOMER: 'Atención al cliente',
      FAULTS: 'Fallas y averías',
      MANAGEMENT: 'Gestión',
      SALES: 'Ventas',
      SUPPORT: 'Soporte',
    };

    const values = new Map<string, string>();
    (contacts ?? []).forEach((c) => {
      const team = c?.latestConversation?.team;
      if (team?.id && team?.name) {
        // Use custom label if available, otherwise use team name
        const label = teamLabels[team.id] || team.name;
        values.set(team.id, label);
      }
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

  const isDefaultFilters =
  contactFilters.platform === null &&
  contactFilters.status === null &&
  contactFilters.teamCodename === null &&
  contactFilters.assignedTo === 'my_teams';
  const triggerButton = (
  <Button 
    className={cn(
      "p-2 relative transition-colors",
      !isDefaultFilters ? "bg-neutral-500 text-neutral-100 border-neutral-200" : "bg-white text-gray-600"
    )} 
    isStatic 
    aria-label="Filtrar"
  >
    <MdFilterList />
    {!isDefaultFilters && (
      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
    )}
  </Button>
  );

  return (
    <Dropdown
      triggerComponent={triggerButton} side="bottom" align="center" sideOffset={8} alignOffset={-250}>
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
