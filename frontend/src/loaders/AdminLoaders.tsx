/* eslint-disable @typescript-eslint/no-unused-vars */
import { useUserStore } from "@/store/AuthStore";
import { Navigate } from "react-router-dom";

type Role = "user" | "admin";

export const AdminLoaders = async (requiredRole: Role) => {
  const { user } = useUserStore.getState();

  if (!user || user.role !== requiredRole) {
    return <Navigate to={"/"} />;
  }

  return user; // Yetkili kullanıcıyı döndürün
};
