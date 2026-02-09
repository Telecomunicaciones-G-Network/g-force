import type { ColumnDef } from '@tanstack/react-table';
import type { Team } from '@module-chat/domain/interfaces';

import { MdCompareArrows, MdMoreVert } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
// import { Avatar } from '@gnetwork-ui/components/molecules/avatars/avatar';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { Tooltip } from '@gnetwork-ui/components/molecules/tooltips/tooltip';
import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';

import { shortString } from '@stringify/utils/short-string.util';

/**
 * @name teamTableBuilder
 *
 * @description This function builds the table columns for the teams table.
 *
 * @returns {ColumnDef<Team>[]} The built columns.
 *
 * TODO: I must to fragment this builder on parts
 */
export const teamTableBuilder: ColumnDef<Team>[] = [
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
    header: 'Nombre del Equipo',
    accessorKey: 'name',
    cell: (data) => (
      <div className="flex gap-4">
        {/* <Avatar
          className="aspect-40/40 max-w-10 max-h-10 min-h-10 min-w-10"
          customBackgroundColor={generateSafeColor(data?.row?.original?.id)}
          username={data?.row?.original?.name}
        /> */}
        <div className="flex flex-col gap-1 justify-center items-center">
          <Text
            as="span"
            align="left"
            className="text-chromatic-inverted"
            level="small"
            scheme="label"
          >
            {data?.row?.original?.name}
          </Text>
        </div>
      </div>
    ),
  },
//   {
//     header: 'Fecha de Creación',
//     accessorKey: 'createdAt',
//   },
//   {
//     header: 'Modificado',
//     maxSize: 150,
//   },
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
