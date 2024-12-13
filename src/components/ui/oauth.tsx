import { Separator } from "@/components/ui/separator";
import { CardDescription } from "@/components/ui/card";
import { Github, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

export const OAuth = () => {
  return (
    <>
      <div className="flex w-full justify-center relative">
        <CardDescription className="absolute z-10 bg-[hsl(var(--background))] px-2">
          OR CONTINUE WITH
        </CardDescription>
        <Separator className="my-2 w-[90%]" />
      </div>
      <div className="mt-3 flex w-full justify-center gap-3 px-4 pb-5">
        <Button className="w-full">
          <Github /> Github
        </Button>
        <Button className="w-full">
          <Facebook /> Facebook
        </Button>
      </div>
    </>
  );
};
