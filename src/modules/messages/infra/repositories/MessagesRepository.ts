import IMessageRepository from '@modules/messages/repositories/IMessagesRepository';
import Message from '../entities/Message';
import ICreateMessageDTO from '../../dtos/ICreateMessageDTO';

export default class MessagesRepository implements IMessageRepository {
  private messages: Message[];

  constructor() {
    this.messages = [];
  }

  public async create({ from, to, body }: ICreateMessageDTO): Promise<Message> {
    const message = new Message({ from, to, body });

    this.messages.push(message);

    return message;
  }
}
