type PaymentMethod = {
  id: number,
  name: string,
  limit: number,
};

const myPaypal: PaymentMethod = {
  id: 123456,
  name: `Preethi Paypal`,
  limit: 10000,
};

type Email = string;

const academy: Email = `mail@htmlacademy.ru`;
