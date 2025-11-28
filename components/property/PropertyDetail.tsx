// components/property/PropertyDetail.tsx
import { useState } from "react";
import { PropertyProps } from "@/interfaces/index";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const [activeTab, setActiveTab] = useState("offer");

  return (
    <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-2">
        {/* Property Header */}
        <h1 className="text-4xl font-bold">{property.name}</h1>
        <div className="flex items-center space-x-4 mt-2 text-gray-600">
          <span className="text-yellow-500">{property.rating} ★</span>
          <span>{property.address.city}, {property.address.country}</span>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {property.images?.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${property.name} ${index + 1}`}
              className={`w-full object-cover rounded-lg ${
                index === 0 ? "col-span-2 h-96" : "h-48"
              }`}
            />
          ))}
        </div>

        {/* Tabs */}
        <div className="mt-6">
          <div className="flex border-b border-gray-300">
            <button
              className={`py-2 px-4 font-medium ${activeTab === "offer" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("offer")}
            >
              What we offer
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === "reviews" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
            <button
              className={`py-2 px-4 font-medium ${activeTab === "host" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
              onClick={() => setActiveTab("host")}
            >
              About host
            </button>
          </div>

          <div className="mt-4 text-gray-700">
            {activeTab === "offer" && <p>{property.description}</p>}
            {activeTab === "reviews" && (
              <ul className="space-y-2">
                {property.reviews?.map((rev, i) => (
                  <li key={i} className="border p-2 rounded-md">
                    <strong>{rev.user}:</strong> {rev.comment}
                  </li>
                )) || <p>No reviews yet.</p>}
              </ul>
            )}
            {activeTab === "host" && <p>{property.hostInfo}</p>}
          </div>

        </div>

        {/* Amenities */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Amenities</h2>
          <ul className="flex flex-wrap gap-2">
            {property.category.map((amenity, index) => (
              <li key={index} className="bg-gray-200 px-3 py-1 rounded-md text-sm">
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Booking Section */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Book this property</h2>
        <p className="text-2xl font-bold mb-2">${property.price} / night</p>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Check-in</label>
          <input type="date" className="w-full border p-2 rounded-md" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Check-out</label>
          <input type="date" className="w-full border p-2 rounded-md" />
        </div>
        <div className="mb-4">
          <p>Total: <strong>${property.price}</strong></p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyDetail;
