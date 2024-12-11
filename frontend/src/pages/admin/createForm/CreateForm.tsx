import SelectInput from "@/components/input/SelectInput";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CreateForm = () => {
  const form = useForm({
    resolver: zodResolver,
    defaultValues: {
      search: "",
    },
    mode: "onChange",
  });

  const onSubmit = () => {};

  return (
    <div className="min-h-screen w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SelectInput
            control={form.control}
            name="category"
            label="Category"
            options={[
              { value: "category1", label: "Category 1" },
              { value: "category2", label: "Category 2" },
              { value: "category3", label: "Category 3" },
            ]}
          />
        </form>
      </Form>
    </div>
  );
};

export default CreateForm;
