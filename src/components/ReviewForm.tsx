import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { reviewsApi } from "@/lib/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

const reviewSchema = z.object({
  username: z.string().trim().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  comment: z.string().trim().min(10, "Review must be at least 10 characters").max(500, "Review is too long"),
  rating: z.number().min(1, "Please select a rating").max(5),
});

interface ReviewFormProps {
  productId: string;
}

const ReviewForm = ({ productId }: ReviewFormProps) => {
  const [username, setUsername] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: { username: string; rating: number; comment: string }) => {
      return reviewsApi.create({
        product_id: productId,
        username: data.username,
        rating: data.rating,
        comment: data.comment,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews", productId] });
      toast({
        title: "Review submitted!",
        description: "Thank you for sharing your experience.",
      });
      setUsername("");
      setRating(0);
      setComment("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit review. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = reviewSchema.safeParse({ username, rating, comment });
    if (!result.success) {
      toast({
        title: "Validation Error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    mutation.mutate({ username, rating, comment });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-lg p-6 shadow-card border border-border/50 space-y-6">
      <h3 className="font-display text-xl text-card-foreground">Write a Review</h3>

      {/* Rating */}
      <div className="space-y-2">
        <label className="font-body text-sm text-muted-foreground">Your Rating</label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <Star
                className={`h-6 w-6 transition-colors ${
                  star <= (hoveredRating || rating)
                    ? "text-gold fill-gold"
                    : "text-muted-foreground/30"
                }`}
              />
            </button>
          ))}
          <span className="font-body text-sm text-muted-foreground ml-2">
            {rating > 0 && `${rating} star${rating > 1 ? "s" : ""}`}
          </span>
        </div>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="username" className="font-body text-sm text-muted-foreground">
          Your Name
        </label>
        <Input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your name"
          className="bg-background border-border focus:border-accent focus:ring-accent"
          maxLength={50}
        />
      </div>

      {/* Comment */}
      <div className="space-y-2">
        <label htmlFor="comment" className="font-body text-sm text-muted-foreground">
          Your Review
        </label>
        <Textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience with this fragrance..."
          rows={4}
          className="bg-background border-border focus:border-accent focus:ring-accent resize-none"
          maxLength={500}
        />
        <p className="font-body text-xs text-muted-foreground text-right">
          {comment.length}/500
        </p>
      </div>

      <Button
        type="submit"
        disabled={mutation.isPending}
        className="w-full bg-gold-gradient text-accent-foreground font-body uppercase tracking-widest text-sm hover:shadow-gold transition-all"
      >
        {mutation.isPending ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
};

export default ReviewForm;
