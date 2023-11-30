import moment from 'moment';
import React from 'react';
import { ChatList, MessageBox } from 'react-chat-elements';
import { BsThreeDotsVertical } from 'react-icons/bs';

import 'react-chat-elements/dist/main.css';
import ArrowLeft from '../components/atoms/ArrowLeft';
import Avatar from '../components/atoms/Avatar';
import InputSection from '../components/molecules/InputSection';
import { Chat, chats } from '../data/chat';
import { ChatItem, listChat } from '../data/list_chat';

type RoomType = {
  id: number | undefined;
  name: string | undefined;
  avatar: string | undefined;
};

const ChatPage = () => {
  const [Id] = React.useState<number>(10);
  const [ListChat, setListChat] = React.useState<ChatItem[]>(listChat || []);
  const [Room, setRoom] = React.useState<RoomType>({
    id: undefined,
    name: undefined,
    avatar: undefined,
  });

  const [Message, setMessage] = React.useState<any>('');
  const [Chat, setChat] = React.useState<Chat[] | []>([]);
  const [OpenPopUp, setOpenPopUp] = React.useState<boolean>(false);
  const messagesEndRef = React.useRef<any>(null);

  React.useEffect(() => {
    const chat: Chat[] = Chat.filter((e: Chat) => e.chat_id === Room?.id);

    setListChat(
      ListChat.map((e: ChatItem) => {
        if (e.id !== Room?.id) return e;
        const latestChat: string = chat[chat.length - 1]?.message;
        return {
          ...e,
          subtitle: latestChat,
        };
      })
    );
  }, [Chat]);

  React.useEffect(() => {
    scrollToBottom();
  }, [Message]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = () => {
    setChat([
      ...Chat,
      {
        chat_id: 1,
        id: 1,
        status: 'sent',
        sender_id: 10,
        sender_name: 'Prio',
        message: Message,
        reply_from: null,
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      },
    ]);

    setMessage('');
  };

  // alert(`xl:w-1/4 w-${Room?.id ? '0' : 'full'} overflow-y-scroll shadow-lg`);

  return (
    <div className="flex h-screen fixed w-full font-sans">
      <div
        className={`w-${
          Room?.id ? '0' : 'full'
        } xl:w-1/4 overflow-y-scroll shadow-lg`}
      >
        <div className="flex flex-row items-center justify-between bg-gray-800 p-3 drop-shadow-md">
          <h1 className="text-white font-mono">ChatSphere</h1>
          <div
            className="p-4 cursor-pointer"
            onClick={() => setOpenPopUp(!OpenPopUp)}
          >
            <BsThreeDotsVertical className="text-white text-[15px]" />
          </div>
        </div>
        {OpenPopUp && (
          <div className="relative">
            <div className="absolute z-[100] rounded-b-md text-[14px] top-0 right-0 shadow-md p-2 bg-gray-800 text-white font-sans">
              <ul>
                <li className="py-1 px-3 cursor-pointer hover:bg-gray-700">
                  Profil
                </li>
                <li className="py-1 px-3 cursor-pointer hover:bg-gray-700">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
        <ChatList
          id={1}
          lazyLoadingImage=""
          onClick={(data) => {
            const roomId: number = +data?.id;
            const chat: Chat[] = chats.filter(
              (e: Chat) => e.chat_id === roomId
            );

            setRoom({ id: roomId, name: data?.title, avatar: data?.avatar });
            setChat(chat);

            setListChat(
              ListChat.map((e: ChatItem) => {
                if (e.id !== roomId) return e;
                const latestChat: string = chat[chat.length - 1]?.message;
                return {
                  ...e,
                  subtitle: latestChat,
                };
              })
            );
          }}
          className="chat-list text-black"
          dataSource={ListChat}
        />
      </div>

      {Room?.id && (
        <div className="flex-1 flex flex-col w-full">
          <div className="bg-gray-800 text-white p-3 fixed w-full">
            <div className="flex items-center">
              <div
                className="mr-3 cursor-pointer lg:hidden"
                onClick={() =>
                  setRoom({
                    id: undefined,
                    name: undefined,
                    avatar: undefined,
                  })
                }
              >
                <ArrowLeft />
              </div>
              <Avatar src={Room?.avatar} />
              <div>
                <p className="font-bold">{Room.name}</p>
                <p>Active</p>
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-x-hidden overflow-y-scroll p-4 mt-20 mb-10">
            {Chat.map((e: Chat, i) => {
              return (
                <div className="" key={i}>
                  <MessageBox
                    id={i}
                    status={e.status || 'sent'}
                    reply={e.reply_from}
                    type="text"
                    text={e.message}
                    date={new Date(e.created_at)}
                    focus={false}
                    retracted={false}
                    notch={false}
                    title={e.sender_id === Id ? 'You' : e.sender_name}
                    titleColor={e.sender_id === Id ? 'red' : 'green'}
                    position={e.sender_id === Id ? 'right' : 'left'}
                    forwarded={e.sender_id === Id ? false : true}
                    removeButton={e.sender_id === Id ? true : false}
                    replyButton={e.sender_id === Id ? false : true}
                    onClick={() => {}}
                  />
                </div>
              );
            })}
            <div className="" ref={messagesEndRef}></div>
          </div>

          <InputSection
            message={Message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      )}
    </div>
  );
};

export default ChatPage;
