import { createData } from "@/validation/CreateForm";
import RichTextEditor from "../ui/editorRich/RichTextEditor";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { UseFormSetValue } from "react-hook-form";

interface Props {
  control: any;
  name: keyof createData;
  label?: string;
  setValue: UseFormSetValue<createData>;
}
const RichTextEditorInput = ({ control, name, label, setValue }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <RichTextEditor
              onChange={(markdown) =>
                setValue(name, markdown, { shouldValidate: true })
              }
              ref={field.ref}
            />
          </FormControl>
          <FormMessage className="absolute text-red-500 text-sm mt-1 left-4 -bottom-4" />
        </FormItem>
      )}
    />
  );
};

export default RichTextEditorInput;
