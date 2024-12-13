import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MailCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const VerifyEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 flex justify-center items-center w-screen h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Verify Your Account</CardTitle>
          <CardDescription className="flex flex-col gap-3">
            <li>
              We just sent an email to example@xyz.com with a verification link.
              Click on the link to verify your account.
            </li>
            <li>You will be redirected to the next page automatically.</li>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <MailCheck className="w-20 h-20 mx-auto" />
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button className="w-full">Resend Mail</Button>
          <Button
            onClick={() => navigate("/auth/verify/update-email")}
            className="w-full"
          >
            Update Mail
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
