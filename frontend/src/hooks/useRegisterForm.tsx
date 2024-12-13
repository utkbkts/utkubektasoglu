import axios from "@/lib/axios";
import { createRegisterData } from "@/validation/CreateRegister";
import { useState } from "react";
import { toast } from "sonner";

const useRegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  const createRegisterForm = async (data: createRegisterData) => {
    try {
      setLoading(true);
      const response = await axios.post("/auth/register", data);
      setFormData(response.data);
      return response.data;
    } catch (err: any) {
      toast.error(err.response?.data?.message || "An error accoudent");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formData,
    createRegisterForm,
  };
};

export default useRegisterForm;
