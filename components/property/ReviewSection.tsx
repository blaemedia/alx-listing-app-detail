// components/property/ReviewSection.tsx
import React from "react";

interface Review {
  name: string;
  rating: number;
  comment: string;
  avatar: string;
}

interface ReviewSectionProps {
  reviews: Review[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-8">
        <h3 className="text-2xl font-semibold">Reviews</h3>
        <p className="text-gray-500 mt-2">No reviews yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center mb-2">
            <img
              src={review.avatar}
              alt={review.name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">{'★'.repeat(review.rating)}</p>
            </div>
          </div>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
