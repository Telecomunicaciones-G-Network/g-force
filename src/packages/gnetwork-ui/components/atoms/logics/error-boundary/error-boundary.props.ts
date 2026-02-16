import type { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?:
    | ReactNode
    | ((error: Error, resetError: VoidFunction) => ReactNode);
  onError?: (error: Error, errorInfo: { componentStack: string }) => void;
  className?: string;
}
