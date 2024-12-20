import { cn } from "@/lib/utils";
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
                className={cn(
                  "w-full p-2 border rounded-md resize-none",
                  className
                )}
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
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
EditProfileInput.displayName = "EditProfileInput";
export default EditProfileInput;
