"use client";
import React from "react";
import FiveStartIconForReview from "./ReviewComponents/FiveStartIconReview";
import { CreateReview } from "@/server/CreateReview";
import { IComments } from "@/types/Comments";
import CommentListing from "./ReviewComponents/CommentListing";
import { GenUuid } from "@/utils/Uuid";
import { useReview } from "@/hooks/UseReview";
import { useFormStatus } from "react-dom";
import ReviewSubmitButton from "./ReviewComponents/ReviewSubmitButton";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface IReviews {
  data: IComments[] | any;
  RoomId: string;
}

const ReviewSection = ({ data, RoomId }: IReviews) => {
  const router = useRouter();
  const ref = React.useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();
  const reviewNumber = useReview((state) => state.ReviewNumber);
  const SetreviewNumber = useReview((state) => state.SetReviewNumber);

  const CreateReviewAction = async (formdata: FormData) => {
    const CreateReviewUpdated = CreateReview.bind(null, RoomId, reviewNumber);
    const result = await CreateReviewUpdated(formdata);

    if (result?.error) {
      if (result.error === "please complete your profile!") {
        toast.error(result.error as string);
        router.push("/dashboard/acount");
        return;
      }
      toast.error(result.error as string);
      return;
    }
    if (result?.data) {
      toast.success("Review created successfully!");
      SetreviewNumber(0);
      ref.current?.reset();
      return router.refresh();
    }
  };
  return (
    <div className="listingSection__wrap">
      <h2 className="text-2xl font-semibold">
        Reviews ({data.length} reviews)
      </h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="space-y-5">
        <FiveStartIconForReview iconClass="w-6 h-6" className="space-x-0.5" />
        <div className="relative">
          <form ref={ref} action={CreateReviewAction}>
            <ReviewSubmitButton />
          </form>
        </div>
      </div>
      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {data.map((comment: any) => (
          <CommentListing key={GenUuid()} data={comment} className="py-8" />
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
