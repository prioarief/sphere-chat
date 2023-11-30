export type Chat = {
  chat_id: number;
  id: number;
  status: 'waiting' | 'sent' | 'received' | 'read';
  sender_id: number;
  sender_name: string;
  message: string;
  reply_from: string | null;
  created_at: string;
};

export const chats: Chat[] = [
  {
    chat_id: 1,
    id: 1,
    status: 'sent',
    sender_id: 10,
    sender_name: 'Mbappe',
    message: 'Hello',
    reply_from: null,
    created_at: '2023-11-28 12:12:12',
  },
  {
    chat_id: 1,
    id: 1,
    status: 'sent',
    sender_id: 11,
    sender_name: 'Mbappe',
    message: 'Hello',
    reply_from: null,
    created_at: '2023-11-28 12:12:12',
  },
  {
    chat_id: 2,
    id: 1,
    status: 'sent',
    sender_id: 10,
    sender_name: 'Mbappe',
    message: 'Hello',
    reply_from: null,
    created_at: '2023-11-28 12:12:12',
  },
  {
    chat_id: 2,
    id: 1,
    status: 'sent',
    sender_id: 10,
    sender_name: 'Mbappe',
    message: 'Hello',
    reply_from: null,
    created_at: '2023-11-28 12:12:12',
  },
];
