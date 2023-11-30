enum UserStatus {
  active = 'active',
  typing = 'typing',
}

export type ChatItem = {
  id: number;
  avatar: string;
  title: string;
  subtitle: string;
  date: Date;
  unread: number;
  status?: UserStatus;
  onClick?: (value: any) => void;
};

export const listChat: ChatItem[] = [
  {
    id: 1,
    avatar: `https://i.pravatar.cc/50?img=${Math.floor(Math.random() * 62)}`,
    title: 'Prio Arief Gunawan',
    subtitle: 'You: What are you doing?',
    date: new Date('2023-11-29 10:20:00'),
    unread: Math.floor(Math.random() * 10),
    status: UserStatus.active,
    onClick: () => alert(String(1))
  },
];
