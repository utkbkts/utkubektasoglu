import EditProfileInput from "@/components/input/EditInput";
import { Button } from "@/components/ui/button";
import {
  createRegisterData,
  createRegisterFormData,
} from "@/validation/CreateRegister";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { createLoginData, createLoginFormData } from "@/validation/CreateLogin";
import { Navigate } from "react-router-dom";
import { useUserStore } from "@/store/AuthStore";

const Auth = () => {
  const [authModal, setAuthModal] = useState(false);
  const { user } = useUserStore();
  if (user && user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{authModal ? "Sign Up" : "Sign In"}</CardTitle>
          <CardDescription>
            {authModal
              ? "Create a new account to get started."
              : "Login to your account."}
          </CardDescription>
        </CardHeader>
        <CardContent>{authModal ? <Register /> : <Login />}</CardContent>
        <CardFooter className="flex justify-center items-center">
          <Button variant="outline" onClick={() => setAuthModal(!authModal)}>
            {authModal
              ? "Already have an account? Sign In"
              : "New user? Sign Up"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

function Register() {
  const { signup, loading } = useUserStore();
  const form = useForm<createRegisterData>({
    resolver: zodResolver(createRegisterFormData),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: createRegisterData) => {
    try {
      await signup(data);
      toast.success("Account created successfully!");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <EditProfileInput
          control={form.control}
          name="name"
          placeholder="Name"
          type="text"
          label="Name"
        />
        <EditProfileInput
          control={form.control}
          name="email"
          placeholder="Email"
          type="email"
          label="Email"
        />
        <EditProfileInput
          control={form.control}
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
        />
        <div className="w-full flex items-center justify-end">
          <Button loading={loading} type="submit">
            Create Account
          </Button>
        </div>
      </form>
    </Form>
  );
}

function Login() {
  const { login, loading } = useUserStore();
  const form = useForm<createLoginData>({
    resolver: zodResolver(createLoginFormData),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: createLoginData) => {
    try {
      await login(data);
      toast.success("Account created successfully!");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <EditProfileInput
          control={form.control}
          name="email"
          placeholder="Email"
          type="email"
          label="Email"
        />
        <EditProfileInput
          control={form.control}
          name="password"
          placeholder="Password"
          type="password"
          label="Password"
        />
        <div className="w-full flex items-center justify-end">
          <Button loading={loading} type="submit">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}

export default Auth;
