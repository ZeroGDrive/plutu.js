export type SadadVerifyRequest = {
  mobile_number: string;
  birth_year: string;
  amount: number | string;
};

export type SadadConfirmRequest = {
  process_id: number;
  amount: number | string;
  code: string;
  invoice_no: string;
  customer_ip?: string;
};

export type SadadVerifyResult = {
  process_id: number;
  amount: number;
  commission: number;
};

export type SadadConfirmResult = {
  transaction_id: number;
  amount: number;
};
