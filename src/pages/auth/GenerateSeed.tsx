import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { AlertDialogBtn } from "@/components/AlertDialogBtn";

export const GenerateSeed = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 flex justify-center items-center w-screen h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">Your Recovery Phrase</CardTitle>
          <CardDescription className="flex flex-col gap-3">
            <li className="mt-3">
              Your recovery phrase is the only way to recover your Trusty
              account.
            </li>
            <li>
              This phrase will be asked everytime when you login to your
              account.
            </li>
            <li>Write it down somewhere safe and secure in sequence.</li>
            <li>
              Once this page is closed, you won't be able to see this phrase
              again.
            </li>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="1">1</Label>
                <Input id="1" value={"hello"} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="2">2</Label>
                <Input id="2" value={"apple"} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="3">3</Label>
                <Input id="3" value={"whale"} />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="4">4</Label>
                <Input id="4" value={"fox"} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="5">5</Label>
                <Input id="5" value={"zebra"} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="6">6</Label>
                <Input id="6" value={"queen"} />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="7">7</Label>
                <Input id="7" value={"lion"} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="8">8</Label>
                <Input id="8" value={"taco"} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="9">9</Label>
                <Input id="9" value={"potato"} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex gap-3">
          {/* <Button
            onClick={() => navigate("/auth/verify/update-email")}
            className="w-full"
          >
            I Write Down My Phrase, Next
          </Button> */}
          <AlertDialogBtn
            btnText="I Write Down My Phrase, Next"
            dialogTitle="Are you absolutely sure?"
            onAction={() => navigate("/auth/verify/seed")}
            onActionBtnText="Yes, I am ready"
          >
            <div>
                Now, you need to verify that you have written down the recovery phrase correctly.
            </div>
          </AlertDialogBtn>
        </CardFooter>
      </Card>
    </div>
  );
};
