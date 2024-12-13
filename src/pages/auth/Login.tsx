import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { OAuth } from "@/components/ui/oauth";
import { PasswordInput } from "@/components/PasswordInput";
import { ReferenceLink } from "@/components/ReferenceLink";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="p-5 flex justify-center items-center w-screen h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Login To Your Account</CardTitle>
          <CardDescription>
            Enter your email & password below to login your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="xyz@example.com" />
              </div>
              <div className="flex flex-col space-y-1.5 relative">
                <Label htmlFor="password" className="relative">
                  Password
                  <span className="absolute right-0">
                    <ReferenceLink linkText="Forgot password?" onClickAction={() => navigate("/auth/forgot-password")} />
                  </span>
                </Label>
                <PasswordInput />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Login Now</Button>
        </CardFooter>
        <OAuth />
      </Card>
    </div>
  );
};
