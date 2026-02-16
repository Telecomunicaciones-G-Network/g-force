import type { ReactNode } from 'react';
import type { ReactChild } from '../../../../types';

export interface ModalMessageButton {
  label: string;
  onClick: VoidFunction;
  color?: 'default' | 'black' | 'gray' | 'red' | 'transparent';
  scheme?: 'default' | 'outline';
  disabled?: boolean;
  loading?: boolean;
  loadingLabel?: string;
}

export interface ModalMessageProps {
  /**
   * Icon component to display in the header
   */
  icon?: ReactChild;

  /**
   * Background color class for the icon container
   */
  iconBackgroundClass?: string;

  /**
   * Icon color class
   */
  iconColorClass?: string;

  /**
   * Modal title
   */
  title: string;

  /**
   * Modal message/description
   */
  message: string;

  /**
   * Primary action button configuration
   */
  primaryButton?: ModalMessageButton;

  /**
   * Secondary action button configuration (usually cancel)
   */
  secondaryButton?: ModalMessageButton;

  /**
   * Whether to show buttons or not
   */
  showButtons?: boolean;

  /**
   * Whether the modal is open
   */
  isOpen?: boolean;

  /**
   * Callback when modal open state changes
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Trigger component for the modal
   */
  triggerComponent: ReactChild;

  /**
   * Additional className for the modal
   */
  className?: string;

  /**
   * Custom content to render instead of default message
   */
  customContent?: ReactNode;
}
