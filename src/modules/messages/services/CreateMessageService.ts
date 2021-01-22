import Message from '../infra/entities/Message';
import MessagesRepository from '../infra/repositories/MessagesRepository';

interface IRequest {
  from: string;

  to: string;

  body: string;
}

export default class CreateMessageService {
  private messagesRepository: MessagesRepository;

  constructor(messagesRepository: MessagesRepository) {
    this.messagesRepository = messagesRepository;
  }

  public async execute({ from, to, body }: IRequest): Promise<Message> {
    const message = this.messagesRepository.create({
      from,
      to,
      body,
    });

    return message;
  }
}
