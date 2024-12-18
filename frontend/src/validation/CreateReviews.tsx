import { z } from "zod";

const messageIsRequired = z
  .string({
    required_error: "required",
  })
  .min(1, "Message cannot be empty")
  .regex(/^[^<>/]*$/, "Invalid characters in message");

export const createReviewData = z.object({
  comment: messageIsRequired.max(500),
  rating: z.number().min(1, "Rating is required").max(5),
});
export type createReviewsData = z.infer<typeof createReviewData>;
