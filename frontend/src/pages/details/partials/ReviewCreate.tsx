import EditProfileInput from "@/components/input/EditInput";
import { Form } from "@/components/ui/form";
import { usePostStore } from "@/store/PostStore";
import {
  createReviewData,
  createReviewsData,
} from "@/validation/CreateReviews";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import StarRatings from "react-star-ratings";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ReviewCreate = () => {
  const { createReviews } = usePostStore();
  const [rating, setRating] = useState(0);
  const params = useParams();
  const form = useForm<createReviewsData>({
    resolver: zodResolver(createReviewData),
    defaultValues: {
      comment: "",
    },
    mode: "onChange",
  });

  const productId = params.id;

  const HandleRatingChange = (newRating: number) => {
    setRating(newRating);
    form.setValue("rating", newRating);
  };

  const onSubmit = async (data: createReviewsData) => {
    const dataReview: any = {
      ...data,
      rating,
      productId,
    };
    try {
      await createReviews(dataReview);
      toast.success("Comment sent successfully!");
      form.reset();
      setRating(0);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <div className="mb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <StarRatings
            rating={rating}
            starRatedColor="#ffb829"
            numberOfStars={5}
            name="rating"
            changeRating={HandleRatingChange}
          />
          <div className="p-2">
            <EditProfileInput
              multiline
              control={form.control}
              name="comment"
              placeholder="Write your review..."
              type="text"
              className="outline-none"
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button size={"md"} variant={"outline"}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ReviewCreate;
