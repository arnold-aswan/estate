import React, { useState } from "react";
import {
  getStorage,
  uploadBytesResumable,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";

const CreateListing = () => {
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
  });
  const [imageUploadError, setImageUploadError] = useState(null);
  const [uploading, setUploading] = useState(false);

  console.log(formData);
  const handleImageUpload = () => {
    if (files.length > 0 && files.length + formData.imageUrls < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];
      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError("Image upload failed (2mb max per image)");
          setUploading(false);
        });
    } else {
      setImageUploadError("you can only upload 6 images per listing");
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  const handleDeleteImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };
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
              onChange={(e) => setFiles(e.target.files)}
              type="file"
              id="images"
              accept="image/*"
              multiple
              className="p-3 border border-gray-300 rounded w-full"
            />
            <button
              disabled={uploading}
              type="button"
              onClick={handleImageUpload}
              className="p-3 text-green-700 border border-green-700 rounded uppercase hover:bg-green-700 hover:text-white hover:shadow-lg disabled:opacity-80">
              {uploading ? "Uploading..." : "Upload"}
            </button>
          </div>
          <p className="text-red-700 text-xs">
            {imageUploadError && imageUploadError}
          </p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((imageUrl, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 border ">
                <img
                  src={imageUrl}
                  alt="listing image"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => handleDeleteImage(index)}
                  className="p-3 text-red-500 rounded-lg uppercase border border-red-500 hover:text-white hover:opacity-95 hover:bg-red-500 hover:shadow-lg">
                  Delete
                </button>
              </div>
            ))}
          <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80 font-medium ">
            Create Listing
          </button>
        </div>
      </form>
    </main>
  );
};

export default CreateListing;
