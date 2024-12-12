import RichTextEditor from "../ui/editorRich/RichTextEditor";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface Props {
  control: any;
  name: string;
  label?: string;
  setValue: (name: string, value: any, shouldValidate?: boolean) => void;
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
              onChange={(markdown) => setValue(name, markdown, true)}
              ref={field.ref}
            />
          </FormControl>
          <FormMessage className="absolute text-red-500 text-sm mt-1 left-4 -bottom-4" />
        </FormItem>
      )}
    />
  );
};

RichTextEditorInput.displayName = "RichTextEditorInput";
export default RichTextEditorInput;
