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
import { Button } from "@/components/ui/button";


export const VerifySeed = () => {
  const navigate = useNavigate();

  return (
    <div className="p-5 flex justify-center items-center w-screen h-screen">
      <Card className="w-[450px]">
        <CardHeader>
          <CardTitle className="text-2xl">
            Verify Your Recovery Phrase
          </CardTitle>
          <CardDescription className="flex flex-col gap-3">
            Write down the rest of the words in the correct sequence to verify.
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
                <Input id="2"/>
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="3">3</Label>
                <Input id="3" />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="4">4</Label>
                <Input id="4" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="5">5</Label>
                <Input id="5" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="6">6</Label>
                <Input id="6" />
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="7">7</Label>
                <Input id="7" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="8">8</Label>
                <Input id="8" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="9">9</Label>
                <Input id="9" value={"potato"} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex gap-3">
          <Button
            onClick={() => navigate("/")}
            className="w-full"
          >
            Verify My Phrase
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
