export type AdfaliVerifyRequest = {
  mobile_number: string;
  amount: string;
};

export type AdfaliConfirmRequest = {
  process_id: string;
  code: string;
  amount: string;
  invoice_no: string;
  customer_ip: string;
};

export type AdfaliVerifyResult = {
  process_id: string;
};

export type AdfaliConfirmResult = {
  transaction_id: string;
  amount: string;
};
