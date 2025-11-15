import type { ChatMessage } from '../interfaces';

export const chatMessages: ChatMessage[] = [
  {
    id: 1,
    direction: 'incoming',
    message:
      'Buenos días, es un gusto saludarle. Quisiera confirmar si mi pago de agosto ya fue registrado.',
    time: '09:35 AM',
    username: 'Angela',
  },
  {
    id: 2,
    direction: 'outgoing',
    message:
      '¡Buenos días, Angela! Gracias por escribirnos. Permíteme un momento mientras verifico el estado de su facturación.',
    time: '09:36 AM',
    username: 'Asistente G-Network',
  },
  {
    id: 3,
    direction: 'outgoing',
    message:
      'He revisado y su factura del mes de agosto, con fecha 15/08/2025, aparece como Pagada el día 16/08/2025 vía Pago Móvil. Actualmente no tiene deudas pendientes.',
    time: '09:37 AM',
    username: 'Asistente G-Network',
  },
  {
    id: 4,
    direction: 'incoming',
    message:
      'Perfecto, muchas gracias. ¿Podría enviarme también un comprobante al correo registrado?',
    time: '09:38 AM',
    username: 'Angela',
  },
  {
    id: 5,
    direction: 'outgoing',
    message:
      'Claro que sí. El comprobante ha sido enviado a su correo: angela.goncalves@example.com \n\n ¿Desea que lo reciba también por WhatsApp?',
    time: '09:39 AM',
    username: 'Asistente G-Network',
  },
  {
    id: 6,
    direction: 'incoming',
    message: 'No, por correo está bien. Gracias por la ayuda.',
    time: '09:40 AM',
    username: 'Angela',
  },
] as const;
