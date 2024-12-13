import { usePasswordVisibilty } from "@/hooks/usePasswordVisibilty";
import { Input } from "./ui/input";
import { Eye, EyeClosed } from "lucide-react";



export const PasswordInput = () => {
    const [isVisible, toggleVisibility] = usePasswordVisibilty(false);

  return (
    <>
      <Input
        id="password"
        placeholder="Password"
        type={isVisible ? "text" : "password"}
      />
      <div
        onClick={() => toggleVisibility()}
        className="absolute right-3 top-1/2 -translate-y-[40%] cursor-pointer"
      >
        {isVisible ? <Eye /> : <EyeClosed />}
      </div>
    </>
  );
};
