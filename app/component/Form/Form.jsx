"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import one from "../../../public/1.jpg";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "Sara SNS",
        email: "example@gmail.com",
        location: "Los Angeles, California, USA", 
        phone: "00000000",
        img:one
    });
    const [photo, setPhoto] = useState(formData?.img);

    const profileRef = useRef(null);

 
  


    const handlePhotoChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            setPhoto(e.target.result);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div ref={profileRef}  className="flex items-center justify-center p-2 w-[600px] mx-auto my-auto">
      <div className="w-full relative bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Photo Upload */}
          <div className="flex flex-col items-center space-y-2">
            <div className="w-24 h-24 relative rounded-full overflow-hidden bg-gray-100">
              {photo ? (
                <Image
                  src={photo}
                  alt="Profile"
                  width={0}
                  height={0}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No File Selected
                </div>
              )}
            </div>
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={(e)=>{handlePhotoChange(e); handleChange(e)}}
              className="hidden"
              id="photo-upload"
            />
            <label
              htmlFor="photo-upload"
              className="text-blue-500 cursor-pointer text-sm"
            >
              Choose Photo
            </label>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
              Location
            </label>
            {/* Location input with autocomplete */}
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}



