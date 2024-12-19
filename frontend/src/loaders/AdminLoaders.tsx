import { useUserStore } from "@/store/AuthStore";
import { redirect } from "react-router-dom";

type Role = "user" | "admin";

export const AdminLoaders = (requiredRole: Role) => {
  const { user } = useUserStore.getState();

  if (!user) {
    return redirect("/");
  }

  if (user.role !== requiredRole) {
    return redirect("/unauthorized");
  }

  return user;
};
