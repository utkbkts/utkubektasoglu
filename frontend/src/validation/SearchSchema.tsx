import { z } from "zod";

const messageIsRequired = z
  .string({
    required_error: "required",
  })
  .min(1, "Message cannot be empty")
  .max(100, "Message is too long")
  .regex(/^[^<>/]*$/, "Invalid characters in message");

export const searchMessageData = z.object({
  search: messageIsRequired,
});

export type searchData = z.infer<typeof searchMessageData>;
