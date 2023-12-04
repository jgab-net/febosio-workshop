import { Message } from '@febosio/ui';
import useTest from '../hooks/useText';

export default function MessageService() {
  const text = useTest();

  return <Message text={text} />
}
