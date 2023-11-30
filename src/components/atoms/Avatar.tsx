type AvatarProps = {
  src: string | undefined;
};

const Avatar = ({ src }: AvatarProps) => (
  <img src={src} className="w-10 h-10 bg-gray-300 rounded-full mr-3" />
);

export default Avatar;
