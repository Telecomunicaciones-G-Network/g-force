import type { ListSection } from '@module-chat/domain/interfaces/interactive-options.interface';
import { MdOutlineMenu, MdClose } from 'react-icons/md';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';
import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';
import { cn } from '@gnetwork-ui/utils/cn.util'; // Asumiendo que usas tu utilidad cn

import styles from './collapsible-list-sections.module.css';

export interface InteractiveListOptionsProps {
  sections: ListSection[];
  buttonText: string;
}

export const InteractiveListOptions = ({
  sections,
  buttonText,
}: InteractiveListOptionsProps) => {
  const { isModalOpen, onOpenChange } = useModal();

  if (!sections || sections.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      <Modal
        isOpen={isModalOpen}
        onOpenChange={onOpenChange}
        className={styles.modal}
        hideModalClose
        triggerComponent={
          <button type="button" className={styles.trigger_button}>
            <MdOutlineMenu className="size-5" />
            <span>{buttonText || 'Opciones'}</span>
          </button>
        }
      >
        <div className={styles.modal_container}>
          <div className={styles.header}>
            <div className={styles.header_left}>
              <div className={styles.header_icon_wrapper}>
                <MdOutlineMenu className="size-5" />
              </div>
              <h3 className={styles.header_title}>
                {buttonText || 'Opciones'}
              </h3>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className={styles.close_button}
              type="button"
            >
              <MdClose className="size-5" />
            </button>
          </div>

          <div className={styles.body_container}>
            {sections.map((section, sIndex) => {
              const sectionKey = section.title || `section-${sIndex}`;
              return (
                <div key={sectionKey} className={styles.section_wrapper}>
                  {section.title && (
                    <span className={styles.section_title}>
                      {section.title}
                    </span>
                  )}
                  <div className={styles.rows_container}>
                    {section.rows?.map((row, rIndex) => {
                      const isLastRowInSection =
                        rIndex === (section.rows?.length || 0) - 1;
                      const isLastSection = sIndex === sections.length - 1;
                      const showBorder = !(isLastRowInSection && isLastSection);

                      return (
                        <div
                          key={row.id || rIndex}
                          className={cn(
                            styles.row_item,
                            showBorder && styles.row_item_border,
                          )}
                        >
                          <span className={styles.row_title}>{row.title}</span>
                          {row.description && (
                            <span className={styles.row_description}>
                              {row.description}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Modal>
    </div>
  );
};
