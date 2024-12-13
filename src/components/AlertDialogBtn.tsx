import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "./ui/button";

type AlertDialogBtnProps = {
  btnText: string;
  dialogTitle: string;
  onAction: () => void;
  children: React.ReactNode;
  onActionBtnText: string;
};

export const AlertDialogBtn = ({
  btnText,
  dialogTitle,
  onAction,
  children,
  onActionBtnText,
}: AlertDialogBtnProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="w-full">{btnText}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{dialogTitle}</AlertDialogTitle>
          <AlertDialogDescription>{children}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => onAction()}>{onActionBtnText}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
