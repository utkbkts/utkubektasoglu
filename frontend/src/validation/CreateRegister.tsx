import { z } from "zod";

const messageIsRequired = z
  .string({
    required_error: "required",
  })
  .min(1, "Message cannot be empty")
  .regex(/^[^<>/]*$/, "Invalid characters in message");

export const createRegisterFormData = z.object({
  name: messageIsRequired.max(100),
  email: messageIsRequired.email(),
  password: z
    .string()
    .min(6, "min 6 characters required")
    .regex(/^[^<>/]*$/, "Invalid characters in message"),
});
export type createRegisterData = z.infer<typeof createRegisterFormData>;
