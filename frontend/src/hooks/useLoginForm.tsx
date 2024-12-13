import axios from "@/lib/axios";
import { createLoginData } from "@/validation/CreateLogin";
import { useState } from "react";
import { toast } from "sonner";

const useLoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);

  const createLoginForm = async (data: createLoginData) => {
    try {
      setLoading(true);
      const response = await axios.post("/auth/login", data);
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
    createLoginForm,
  };
};

export default useLoginForm;
