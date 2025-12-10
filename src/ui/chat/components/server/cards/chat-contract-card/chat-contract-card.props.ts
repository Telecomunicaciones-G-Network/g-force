import { ContractValues } from '@module-contract/domain/interfaces';

export interface ChatContractCardProps extends ContractValues {
  expirationDate?: string;
  open?: boolean;
  title?: string;
}
