export type MoamalatPayRequest = {
  card_number: string;
  card_expiration: string;
  card_holder_name: string;
  amount: string;
  return_url: string;
  invoice_no: string;
  customer_ip?: string;
  email?: string;
};

export type MoamalatPayResult = {
  requires_action: string;
  redirect_to_url: string;
};
