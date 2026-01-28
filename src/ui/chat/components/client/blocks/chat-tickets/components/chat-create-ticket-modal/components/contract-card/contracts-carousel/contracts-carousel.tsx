'use client';

import type { ContractsCarouselProps } from './contracts-carousel.props';

import useEmblaCarousel from 'embla-carousel-react';

import { ContractCard } from '..';

import styles from './contracts-carousel.module.css';

export const ContractsCarousel = ({
  contracts,
  selectedContractId,
  onContractSelect,
}: Readonly<ContractsCarouselProps>) => {
  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {contracts.map((contract) => (
            <div key={contract.contract_number} className={styles.embla__slide}>
              <ContractCard
                address={contract.address}
                client_type_name={contract.client_type_name || 'Residencial'}
                isSelected={selectedContractId === contract.contract_number}
                number={contract.contract_number}
                onClick={() => onContractSelect(contract.contract_number)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
