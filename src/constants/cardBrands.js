export const CARD_BRAND = Object.freeze({
  STAR: 'star',
  PULSE: 'pulse',
  MAESTRO: 'maestro',
  MASTERCARD: 'mastercard',
  PLUS: 'plus',
  VISA: 'visa',
});

export const CARD_BRANDS = Object.freeze(Object.values(CARD_BRAND));

export function isValidCardBrand(brand) {
  return CARD_BRANDS.includes(brand);
}

export function getCardBrandIndex(brand) {
  return CARD_BRANDS.indexOf(brand);
}
