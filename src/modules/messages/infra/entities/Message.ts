import { uuid } from 'uuidv4';

export default class Message {
  id: string;

  from: string;

  to: string;

  body: string;

  constructor({ from, to, body }: Omit<Message, 'id'>) {
    this.id = uuid();
    this.from = from;
    this.to = to;
    this.body = body;
  }
}
