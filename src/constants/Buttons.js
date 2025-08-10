// Base button positions (8 total - 4 left, 4 right)
export const ATM_BUTTONS = Object.freeze({
  LEFT_1: { id: 'left_1', side: 'left', index: 0 },
  LEFT_2: { id: 'left_2', side: 'left', index: 1 },
  LEFT_3: { id: 'left_3', side: 'left', index: 2 },
  LEFT_4: { id: 'left_4', side: 'left', index: 3 },
  RIGHT_1: { id: 'right_1', side: 'right', index: 0 },
  RIGHT_2: { id: 'right_2', side: 'right', index: 1 },
  RIGHT_3: { id: 'right_3', side: 'right', index: 2 },
  RIGHT_4: { id: 'right_4', side: 'right', index: 3 },
});

// Button action types for API calls
export const BUTTON_ACTIONS = Object.freeze({
  // Transaction actions
  WITHDRAW: 'withdraw',
  DEPOSIT: 'deposit',
  BALANCE_INQUIRY: 'balance_inquiry',
  TRANSFER: 'transfer',

  // System actions
  CHANGE_PIN: 'change_pin',
  PRINT_RECEIPT: 'print_receipt',
  EXIT: 'exit',
  CANCEL: 'cancel',

  // Navigation actions
  START_TRANSACTION: 'start_transaction',
  BACK: 'back',
  CONFIRM: 'confirm',
  CLEAR: 'clear',
});
