import type { ColumnDef } from '@tanstack/react-table';
import type { GetAgentsResponseAgent } from '@module-chat/domain/interfaces';
import type { AgentStatus } from '@module-chat/domain/types';

import Image from 'next/image';

import { MdCheck, MdClose, MdCompareArrows, MdMoreVert } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { Tag } from '@gnetwork-ui/components/molecules/tags/tag';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';
import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';

import { shortString } from '@stringify/utils/short-string.util';

import { agentStatusTagColorDictionary } from '@ui-chat/dictionaries/agent-status-tag-color.dictionary';
import { agentStatusLabelDictionary } from '@ui-chat/dictionaries/agent-status-label.dictionary';

/**
 * @name agentTableBuilder
 *
 * @description This function builds the table columns for the agents table.
 *
 * @returns {ColumnDef<GetAgentsResponseAgent>[]} The built columns.
 *
 * TODO: I must to fragment this builder on parts
 */
export const agentTableBuilder: ColumnDef<GetAgentsResponseAgent>[] = [
  {
    header: 'ID',
    accessorKey: 'id',
    cell: (data) => (
      <Tooltip
        side="right"
        sideOffset={16}
        triggerComponent={<span>{shortString(String(data?.getValue()))}</span>}
      >
        {String(data?.getValue())}
      </Tooltip>
    ),
  },
  {
    header: 'Agente',
    cell: (data) => (
      <div className="flex gap-4">
        <Avatar
          className="aspect-40/40 max-w-10 max-h-10 min-h-10 min-w-10"
          customBackgroundColor={
            data?.row?.original?.id
              ? `#${data?.row?.original?.id?.slice(-6)}`
              : '#000000'
          }
          image={
            data?.row?.original?.isBot &&
            data?.row?.original?.name?.toLowerCase() === 'g-net'
              ? {
                  customImageComponent: (
                    <Image
                      alt="G-Net avatar"
                      className="responsive-image-cover"
                      fill
                      priority
                      sizes="100%"
                      src="/images/gnet-avatar.webp"
                    />
                  ),
                }
              : undefined
          }
          username={data?.row?.original?.name}
        />
        <div className="flex flex-col gap-1">
          <Text
            as="span"
            align="left"
            className="text-chromatic-inverted"
            level="small"
            scheme="label"
          >
            {data?.row?.original?.name}
          </Text>
          <Text
            as="span"
            align="left"
            className="text-neutral-500"
            level="small"
            scheme="label"
          >
            {data?.row?.original?.email}
          </Text>
        </div>
      </div>
    ),
  },
  {
    header: 'Estado',
    accessorKey: 'status',
    cell: (data) => (
      <div className="flex items-center">
        <Tag
          color={
            agentStatusTagColorDictionary?.[
              String(data?.getValue()) as AgentStatus
            ]
          }
        >
          {
            agentStatusLabelDictionary?.[
              String(data?.getValue()) as AgentStatus
            ]
          }
        </Tag>
      </div>
    ),
  },
  {
    header: 'Bot',
    accessorKey: 'isBot',
    cell: (data) => (
      <div className="flex justify-center items-center">
        {String(data?.getValue()) === 'true' ? (
          <MdCheck className="fill-success-300 min-h-6 min-w-6 size-6" />
        ) : (
          <MdClose className="fill-red-500 min-h-6 min-w-6 size-6" />
        )}
      </div>
    ),
  },
  {
    header: 'Equipos',
    maxSize: 150,
    cell: (data) => (
      <div className="flex items-center flex-wrap max-w-[150px]">
        <span className="text-wrap">
          {data?.row?.original?.isBot
            ? 'Bots'
            : data?.row?.original?.teams?.map((team) => team?.name).join(', ')}
        </span>
      </div>
    ),
  },
  {
    header: 'Acciones',
    cell: () => (
      <div className="flex justify-center items-center">
        <Dropdown
          align="start"
          alignOffset={-214}
          className="gap-0 min-w-[257px]"
          side="bottom"
          sideOffset={8}
          triggerComponent={
            <Button className="px-2" scheme="ghost">
              <MdMoreVert className="min-h-6 min-w-6 size-6" />
            </Button>
          }
        >
          <DropdownItem
            className="focus:[&_svg]:fill-chromatic! focus:**:text-chromatic! hover:[&_svg]:fill-chromatic! hover:**:text-chromatic!"
            disabled={true}
            onSelect={(event) => {
              event.preventDefault();
            }}
          >
            <MdCompareArrows className="fill-neutral-800 min-h-6 min-w-6 size-6" />
            <Text
              as="span"
              className="text-neutral-600"
              level="small"
              scheme="label"
            >
              Ver detalle
            </Text>
          </DropdownItem>
        </Dropdown>
      </div>
    ),
  },
];
