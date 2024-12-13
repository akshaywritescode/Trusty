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
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";

export const UpdateUnverifiedEmail = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 flex justify-center items-center w-screen h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Update Your Email Address</CardTitle>
          <CardDescription>
            Made a mistake while entering your email? No worries! Update your
            old email with a new one.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="xyz@example.com" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button onClick={() => navigate("/auth/verify/email")} className="w-full">Update Mail Address</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
