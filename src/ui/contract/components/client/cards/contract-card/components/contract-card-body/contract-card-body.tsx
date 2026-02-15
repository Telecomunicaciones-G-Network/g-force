import type { ContractCardBodyProps } from './contract-card-body.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

export const ContractCardBody = ({
  contract,
}: Readonly<ContractCardBodyProps>) => (
  <>
    {contract?.number && (
      <Text as="p" className="font-medium" level="small" scheme="label">
        Número: {contract?.number}
      </Text>
    )}
    {contract?.address && (
      <Text
        as="p"
        className="font-medium line-clamp-2"
        level="small"
        scheme="label"
      >
        Dirección: {contract?.address}
      </Text>
    )}
  </>
);
