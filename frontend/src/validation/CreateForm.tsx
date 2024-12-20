import { z } from "zod";
const messageIsRequired = z
  .string({
    required_error: "required",
  })
  .min(1, "Message cannot be empty")
  .regex(/^[^<>/]*$/, "Invalid characters in message");

export const createFormData = z.object({
  categoryHeader: messageIsRequired.max(100),
  title: messageIsRequired.max(100),
  description: z.string().min(1),
  category: messageIsRequired.max(100),
  tags: messageIsRequired.max(500),
});

export type createData = z.infer<typeof createFormData>;
