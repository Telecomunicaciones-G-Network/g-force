import { BaseException } from '@http-client/exceptions/base.exception';

type Props = {
  contactId: string;
  status?: number;
  message?: string;
};

export class SelfAssignChatConversationException extends BaseException {
  constructor(props: Props) {
    super({
      message: props.message || `Ocurrió un error al intentar auto-asignar la conversación para el contacto.`,
      status: props.status,
    });
  }
}

