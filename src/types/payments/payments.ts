export class Payments {
  constructor({
    id = 0,
    amount = 0,
    bankCode = "",
    destinationPhone = "",
    dni = "",
    paymentReference = "",
    invoiceNumber = "",
  }) {
    this.id = id;
    this.amount = amount;
    this.bankCode = bankCode;
    this.destinationPhone = destinationPhone;
    this.dni = dni;
    this.paymentReference = paymentReference;
    this.invoiceNumber = invoiceNumber;
  }

  id;
  amount;
  bankCode;
  destinationPhone;
  dni;
  paymentReference;
  invoiceNumber;
};