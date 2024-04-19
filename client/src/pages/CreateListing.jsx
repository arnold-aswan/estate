import React from "react";

const CreateListing = () => {
  return (
    <main className="p-3 max-w-4xl mx-auto ">
      <h1 className="text-3xl font-semibold text-center my-7 ">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1 ">
          <input
            type="text"
            className="border p-3 rounded-lg "
            id="name"
            placeholder="Listing Name"
            maxLength={62}
            minLength={10}
            required
          />
          <textarea
            className="border p-3 rounded-lg "
            id="description"
            placeholder="Listing description"
            required
          />
          <input
            type="text"
            className="border p-3 rounded-lg "
            id="address"
            placeholder="Listing address"
            required
          />
          <div className="flex gap-6 flex-wrap items-center ">
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="sale" className="w-5" />
              <label htmlFor="sale">Sell</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="rent" className="w-5" />
              <label htmlFor="rent">Rent</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="parking" className="w-5" />
              <label htmlFor="parking">Parking Spot</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="furnished" className="w-5" />
              <label htmlFor="furnished">Furnished</label>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" id="offer" className="w-5" />
              <label htmlFor="offer">Offer</label>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2 ">
              <input
                type="number"
                id="bedrooms"
                min={1}
                max={10}
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Beds</p>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="number"
                id="bathrooms"
                min={1}
                max={10}
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Baths</p>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="number"
                id="regularPrice"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <small className="text-xs">($/Month)</small>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <input
                type="number"
                d
                id="discountPrice"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Discount Price</p>
                <small className="text-xs">($/Month)</small>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-4">
          <p className="font-semibold">
            Images:
            <span className="font-normal text-gray-600 ml-2">
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className="flex gap-4">
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="p-3 border border-gray-300 rounded w-full"
            />
            <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80 font-medium ">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
