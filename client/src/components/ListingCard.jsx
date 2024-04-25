import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

const ListingCard = ({ listing }) => {
  return (
    <div className="bg-gray-100 shadow-md hover:shadow-lg transition-shadow overflow-hidden rounded-lg w-full sm:w-[330px] ">
      <Link to={`/listing/${listing._id}`}>
        <img
          loading="lazy"
          src={
            listing.imageUrls[0] ||
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="listing-cover"
          className="h-[320px] sm:h-[220px]  w-full object-cover hover:scale-105 transition-scale duration-300 "
        />
        <div className="p-3 flex flex-col gap-2 w-full ">
          <p className="truncate text-lg font-semibold text-slate-700 ">
            {listing.name}
          </p>
          <div className="flex items-center gap-2 ">
            <MdLocationOn className="h-4 w-4 text-green-700 " />
            <p className="truncate text-sm text-gray-600">{listing.address}</p>
          </div>
          <p className=" line-clamp-2 text-sm text-slate-700 ">
            {listing.description}
          </p>
          <p className="text-slate-500 mt-2 font-semibold ">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-us")
              : listing.regularPrice.toLocaleString("en-us")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="text-slate-700 flex items-center gap-4">
            <p className="font-bold text-xs ">{listing.bedrooms} Beds</p>
            <p className="font-bold text-xs ">{listing.bathrooms} Baths</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ListingCard;
