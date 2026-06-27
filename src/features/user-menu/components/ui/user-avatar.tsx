import { UserCircleIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IUserAvatarProps {
  src: string;
  alt: string | undefined;
}

const UserAvatar = ({ alt, src }: IUserAvatarProps) => {
  return (
    <Avatar className="size-full">
      <AvatarImage src={src} alt={alt} loading="lazy" />
      <AvatarFallback className="bg-secondary text-primary">
        <HugeiconsIcon icon={UserCircleIcon} size={24} />
      </AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
