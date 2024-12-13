import axios from "@/lib/axios";
import { createData } from "@/validation/CreateForm";
import { useState } from "react";

const useCreateForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(null);
  const [error, setError] = useState(null);

  const createDataForm = async (data: createData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.post("/post", data);

      setFormData(response.data);
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || "An error accoudent");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    formData,
    error,
    createDataForm,
  };
};

export default useCreateForm;
