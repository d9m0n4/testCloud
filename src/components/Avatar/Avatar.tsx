import { FC } from 'react';
import './Avatar.scss';

interface AvatarProps {
  src?: string;
  name?: string;
  width?: number;
  height?: number;
}

export const Avatar: FC<AvatarProps> = ({ src, name, width = 80 }) => {
  return (
    <div
      className="avatar"
      style={{ width: `${width}px`, height: `${width}px`, fontSize: `${width / 2}px` }}>
      {src ? <img src={src} width={width} height={width} alt="avatar" /> : <span>{name}</span>}
    </div>
  );
};
