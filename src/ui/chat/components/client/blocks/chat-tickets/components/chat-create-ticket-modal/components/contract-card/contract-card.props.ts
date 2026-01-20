export interface ContractCardProps {
  address: string;
  client_type_name?: string;
  isSelected?: boolean;
  number: number;
  onClick: () => void;
}