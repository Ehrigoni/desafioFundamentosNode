import { uuid } from 'uuidv4';

interface TransactionConstructor {
  title: string;
  value: string;
  type: 'income' | 'outcome';
}

class Transaction {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type }: Omit<Transaction, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transaction;
