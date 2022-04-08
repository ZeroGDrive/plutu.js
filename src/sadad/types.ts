export type VerifySadadRequest = {
  mobile_number: string;
  birth_year: string;
  amount: string;
};

export type ConfirmSadadRequest = {
  process_id: string;
  amount: string;
  code: string;
  invoice_no: string;
  customer_ip: string;
};

export type VerifySadadResult = {
  process_id: string;
};

export type ConfirmSadadResult = {
  transaction_id: string;
  amount: string;
};
