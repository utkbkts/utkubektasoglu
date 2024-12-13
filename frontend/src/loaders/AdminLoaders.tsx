import { useUserStore } from "@/store/AuthStore";
import { redirect } from "react-router-dom";

export const AdminLoaders = async (requiredRole: "user" | "admin") => {
  const { user } = useUserStore.getState();

  if (!user || user.role !== requiredRole) {
    return redirect("/");
  }

  return user;
};
