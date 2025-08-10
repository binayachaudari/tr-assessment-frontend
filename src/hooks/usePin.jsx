import { useContext } from 'react';
import { PinContext } from '../contexts/PinContext';

export function usePin() {
  const context = useContext(PinContext);
  if (context === undefined) {
    throw new Error('usePin must be used within a PinProvider');
  }
  return context;
}
