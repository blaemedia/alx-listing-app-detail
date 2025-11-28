// pages/property/[id].tsx
import { useRouter } from "next/router";
import PropertyDetail from "@/components/property/PropertyDetail";
import BookingSection from "@/components/property/BookingSection";
import ReviewSection from "@/components/property/ReviewSection";
import { PROPERTYLISTINGSAMPLE } from "@/constants/index";
import { NextPage } from "next";

const PropertyPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id is a string before using it
  const property = typeof id === "string"
    ? PROPERTYLISTINGSAMPLE.find((item) => item.name === id)
    : undefined;

  if (!property) return <p className="text-center mt-10">Property not found</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Flex layout for desktop, stacked on mobile */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Left/main section */}
        <div className="flex-1">
          <PropertyDetail property={property} />
          <ReviewSection propertyId={property.id} />
        </div>

        {/* Right/booking sidebar */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <BookingSection propertyId={property.id} />
        </div>
      </div>
    </div>
  );
};

export default PropertyPage;
