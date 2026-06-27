import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";

interface IUserMenuHeaderProps {
  user_name: string | undefined;
  email: string | undefined;
}

const UserMenuHeader = ({ user_name, email }: IUserMenuHeaderProps) => {
  return (
    <DropdownMenuLabel className="font-normal">
      <div className="flex flex-col space-y-1">
        <p className="text-sm font-bold leading-none">{user_name}</p>
        <p className="text-xs leading-none text-muted-foreground italic">
          {email}
        </p>
      </div>
    </DropdownMenuLabel>
  );
};

export default UserMenuHeader;
