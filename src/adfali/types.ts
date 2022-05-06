export type AdfaliVerifyRequest = {
  mobile_number: string;
  amount: number | string;
};

export type AdfaliConfirmRequest = {
  process_id: string;
  code: number | string;
  amount: string | number;
  invoice_no: string;
  customer_ip?: string;
};

export type AdfaliVerifyResult = {
  process_id: number;
};

export type AdfaliConfirmResult = {
  transaction_id: number;
  amount: number;
};
