import { UserPicture } from "@/user/types";
import Image from "next/image";

interface AvatarProps {
  picture: UserPicture;
}

export const Avatar = ({ picture }: AvatarProps) => {
  return (
    <Image
      className="rounded-full border-2 border-dark shadow-sm"
      src={picture.large}
      width={150}
      height={150}
      alt="user-avatar"
    />
  );
};
