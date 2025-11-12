export const ChatInvoices = [
  {
    id: 1,
    amount: '45,00$',
    billingCycle: 'Mensual',
    issueDate: '15/08/2025',
    number: 'FAC-2025-00876',
    paymentDate: '16/08/2025',
    paymentMethod: 'Pago Móvil',
    status: 'Pagada',
    title: 'Factura #1',
  },
  {
    id: 2,
    amount: '45,00$',
    billingCycle: 'Mensual',
    issueDate: '16/08/2025',
    number: 'FAC-2025-00876',
    paymentDate: '17/08/2025',
    paymentMethod: 'Tarjeta de débito (Banco BNC)',
    status: 'Pagada',
    title: 'Factura #2',
  },
] as const;
