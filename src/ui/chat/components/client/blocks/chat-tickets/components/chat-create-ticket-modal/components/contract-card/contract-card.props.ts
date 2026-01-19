export interface ContractCardProps {
  address: string;
  contractType: string;
  isSelected?: boolean;
  number: number;
  onClick: () => void;
}