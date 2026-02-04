import { Contract } from '@module-contract/domain/interfaces';

export interface ChatContractCardProps {
  contract: Contract;
  open?: boolean;
  title?: string;
}
