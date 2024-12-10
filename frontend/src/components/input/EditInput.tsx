import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface Props {
  control: any;
  name: string;
  label?: string;
  placeholder: string;
  multiline?: boolean;
  className?: string;
  type?: "text" | "password" | "email";
}

const EditProfileInput = ({
  control,
  name,
  label,
  placeholder,
  multiline,
  type,
  className,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {multiline ? (
              <Textarea
                className="w-full p-2 border rounded-md resize-none"
                placeholder={placeholder}
                {...field}
                rows={6}
              />
            ) : (
              <Input
                placeholder={placeholder}
                {...field}
                type={type}
                className={className}
              />
            )}
          </FormControl>
          <FormMessage className="absolute text-red-500 text-sm mt-1 left-4 -bottom-4" />
        </FormItem>
      )}
    />
  );
};
EditProfileInput.displayName = "EditProfileInput";
export default EditProfileInput;
