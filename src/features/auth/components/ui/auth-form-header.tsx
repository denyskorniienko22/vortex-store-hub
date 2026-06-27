import { cn } from "@/lib/utils";

interface IAuthFormHeaderProps {
  title: string;
  description: string;
}

const AuthFormHeader = ({ title, description }: IAuthFormHeaderProps) => {
  return (
    <header className={cn("flex flex-col items-center gap-2", "text-center")}>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-balance text-muted-foreground">{description}</p>
    </header>
  );
};

export default AuthFormHeader;
