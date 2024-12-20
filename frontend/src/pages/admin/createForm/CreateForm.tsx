import EditProfileInput from "@/components/input/EditInput";
import RichTextEditorInput from "@/components/input/RichTextEditor";
import SelectInput from "@/components/input/SelectInput";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { usePostStore } from "@/store/PostStore";
import { createData, createFormData } from "@/validation/CreateForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const CreateForm = () => {
  const [image, setImages] = useState("");
  const { createPost } = usePostStore();

  const FileInputRef = useRef<HTMLInputElement>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files?.[0];
    const maxSize = 2 * 1024 * 1024;
    if (files) {
      if (files.size > maxSize) {
        return toast.error("2MB'dan büyük resimler yükleyemezsiniz.");
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImages(reader.result as string);
      };
      reader.readAsDataURL(files);
    }
  };

  const form = useForm<createData>({
    resolver: zodResolver(createFormData),
    defaultValues: {
      categoryHeader: "",
      title: "",
      description: "",
      category: "",
      tags: "",
    },
    mode: "onChange",
  });

  const handleResetFileInput = () => {
    setImages("");
    if (FileInputRef.current) {
      FileInputRef.current.value = "";
    }
  };

  const onSubmit = async (data: any) => {
    try {
      await createPost({ ...data, image });
      toast.success("Form submitted successfully!");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <div className="h-full w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SelectInput
            control={form.control}
            name="categoryHeader"
            label="Category Header"
            options={[
              { value: "blog", label: "Blog" },
              { value: "project", label: "Project" },
            ]}
          />
          <EditProfileInput
            control={form.control}
            name="title"
            label="Title"
            placeholder="Title"
          />
          <RichTextEditorInput
            control={form.control}
            name="description"
            label="Description"
            setValue={form.setValue}
          />
          <SelectInput
            control={form.control}
            name="category"
            label="Category"
            options={[
              { value: "Full-Stack", label: "Full-Stack" },
              { value: "Frontend", label: "Frontend" },
              { value: "Backend", label: "Backend" },
              { value: "English", label: "English" },
              { value: "Software", label: "Software" },
            ]}
          />
          <EditProfileInput
            control={form.control}
            name="tags"
            label="Tags"
            placeholder="Tags "
          />
          <div className="pb-2 pt-2">
            <label className="text-[14px] font-medium text-[#09090b] text-sm px-1">
              Images
            </label>
            <Input
              ref={FileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-3"
            />
            {image && (
              <div className="mt-4">
                <img
                  src={image}
                  className="border object-cover border-gray-400 w-32 h-32 rounded-md"
                  alt="Uploaded"
                />
                <button
                  onClick={handleResetFileInput}
                  type="button"
                  className="mt-2 text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </Form>
    </div>
  );
};

export default CreateForm;
