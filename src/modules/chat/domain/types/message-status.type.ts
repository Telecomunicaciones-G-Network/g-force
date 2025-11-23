export type MessageStatus =
  | 'DELIVERED' // doble check gris
  | 'FAILED' // exclamacion
  | 'PENDING' // relog
  | 'READ' // doble check azul
  | 'SENT'; // check
