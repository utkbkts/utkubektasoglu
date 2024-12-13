import { z } from "zod";

const messageIsRequired = z
  .string({
    required_error: "required",
  })
  .min(1, "Message cannot be empty")
  .regex(/^[^<>/]*$/, "Invalid characters in message");

export const createLoginFormData = z.object({
  email: messageIsRequired.email(),
  password: z
    .string()
    .min(6, "min 6 characters required")
    .regex(/^[^<>/]*$/, "Invalid characters in message"),
});
export type createLoginData = z.infer<typeof createLoginFormData>;
