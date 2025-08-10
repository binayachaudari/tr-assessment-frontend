import { useState } from 'react';
import { PinContext } from '../contexts/PinContext';
import { CARD_BRAND } from '../constants/cardBrands';

export function PinProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [cardBrand, setCardBrand] = useState(null);

  const CORRECT_PIN = '1234';

  const authenticate = (pin) => {
    if (pin === CORRECT_PIN) {
      setEnteredPin(pin);
      setIsAuthenticated(true);
      setCardBrand(CARD_BRAND.VISA);
      return true;
    }
    setEnteredPin('');
    setCardBrand(null);
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setEnteredPin('');
  };

  const resetPin = () => {
    setEnteredPin('');
  };

  const value = {
    isAuthenticated,
    enteredPin,
    authenticate,
    logout,
    resetPin,
    CORRECT_PIN,
    cardBrand,
  };

  return <PinContext.Provider value={value}>{children}</PinContext.Provider>;
}
