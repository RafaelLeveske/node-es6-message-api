import ICreateMessageDTO from '../dtos/ICreateMessageDTO';
import Message from '../infra/entities/Message';

export default interface IMessageRepository {
  create(data: ICreateMessageDTO): Promise<Message>;
}
