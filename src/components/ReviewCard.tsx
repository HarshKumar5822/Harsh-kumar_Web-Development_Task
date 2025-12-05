import { Star } from "lucide-react";
import { format } from "date-fns";

interface ReviewCardProps {
  username: string;
  rating: number;
  comment: string;
  created_at: string;
}

const ReviewCard = ({ username, rating, comment, created_at }: ReviewCardProps) => {
  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), "MMM d, yyyy");
    } catch {
      return "Recently";
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-card border border-border/50">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <span className="font-display text-lg text-gold">
              {username.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <p className="font-body font-medium text-card-foreground">{username}</p>
            <p className="font-body text-xs text-muted-foreground">
              {formatDate(created_at)}
            </p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating
                  ? "text-gold fill-gold"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Comment */}
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        "{comment}"
      </p>
    </div>
  );
};

export default ReviewCard;
