import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { OAuth } from "@/components/ui/oauth";
import { PasswordInput } from "@/components/PasswordInput";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupSchema, TSignupSchema } from "@/validation/signup.validate";
import { authAppwrite } from "@/appwrite/auth/auth.appwrite";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const Signup = () => {
  const [setUserid] = useLocalStorage("userId")
  const [setSessionid] = useLocalStorage("sessionId")
  const [setEmail] = useLocalStorage("email")
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<TSignupSchema>({
    resolver: zodResolver(SignupSchema),
  });
  const auth = authAppwrite();

  const onSubmit = (data: any) => {
    setLoading(true);
    auth
      .createAccount(data.email, data.password)
      .then((response) => {
        setUserid(response.$id)
        setSessionid(response.targets[0].$id)
        setEmail(response.email)
        setLoading(false);
        if(!response.emailVerification){
          navigate("/auth/verify/email")
        }
        console.log(response);
        
      })
      .catch((error) => {
        if (error.type === "user_already_exists") {
          setServerError("user with this email already exists");
          setLoading(false);
        }

        if(error.type === "general_rate_limit_exceeded") {
          setServerError("Too many requests. Please try again later");
          setLoading(false);
        }
      });
  };

  return (
    <div className="p-5 flex justify-center items-center w-screen h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email & password below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="xyz@example.com"
                  {...register("email")}
                />
                <CardDescription className="text-red-500">
                  {errors.email && errors.email?.message}
                  {serverError}
                </CardDescription>
              </div>
              <div className="flex flex-col space-y-1.5 relative">
                <Label htmlFor="password">Password</Label>
                <PasswordInput name={register("password")} />
              </div>
              <CardDescription className="text-red-500">
                {errors.password && errors.password?.message}
              </CardDescription>
            </div>
            <DevTool control={control} />
            <Button className="w-full mt-5" type="submit" disabled={loading}>
              {loading ? "Please wait..." : "Create Account"}
              {loading && <Loader2 className="animate-spin" />}
            </Button>
          </form>
        </CardContent>
        <OAuth />
      </Card>
    </div>
  );
};
