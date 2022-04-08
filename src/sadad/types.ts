export type SadadVerifyRequest = {
  mobile_number: string;
  birth_year: string;
  amount: string;
};

export type SadadConfirmRequest = {
  process_id: string;
  amount: string;
  code: string;
  invoice_no: string;
  customer_ip: string;
};

export type SadadVerifyResult = {
  process_id: string;
};

export type SadadConfirmResult = {
  transaction_id: string;
  amount: string;
};
