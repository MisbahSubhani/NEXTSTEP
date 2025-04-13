import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Navbarnew } from "../Components/Navbarnew";

export const PostInternship = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [currency, setCurrency] = useState("INR");
  const conversionRate = 83;

  const convertToINR = (stipend, currency) => {
    if (currency === "USD") {
      return stipend * conversionRate;
    }
    return stipend;
  };

  const onSubmit = async (data) => {
    const convertedStipend = convertToINR(parseFloat(data.stipend), currency);

    const formData = {
      ...data,
      stipend: convertedStipend,
      currency,
      is_immediate: Boolean(data.is_immediate),
      duration: parseInt(data.duration),
      starting_date: new Date(data.starting_date).toISOString(),
    };

    try {
      const token = localStorage.getItem("authorization"); // make sure this is set after HR logs in

      if (!token) {
        alert("No token found. Please login again.");
        return;
      }

      const response = await axios.post(
        "http://localhost:3001/hr/postInternship",
        formData,
        {
          headers: {
            Authorization: token,
          },
        }
      );

      console.log("Internship posted:", response.data);
      alert("Internship posted successfully!");
    } catch (error) {
      console.error("Error posting internship:", error);
      alert("Error posting internship: " + error.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <Navbarnew />
      <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Post an Internship</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block font-semibold">Company Name</label>
            <input
              type="text"
              {...register("company_name", { required: "Company name is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.company_name && <p className="text-red-500">{errors.company_name.message}</p>}
          </div>

          <div>
            <label className="block font-semibold">Position</label>
            <input
              type="text"
              {...register("position", { required: "Position is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.position && <p className="text-red-500">{errors.position.message}</p>}
          </div>

          <div>
            <label className="block font-semibold">Location</label>
            <input
              type="text"
              {...register("location", { required: "Location is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.location && <p className="text-red-500">{errors.location.message}</p>}
          </div>

          <div>
            <label className="block font-semibold">Stipend</label>
            <div className="flex">
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="p-2 border rounded-l bg-gray-100"
              >
                <option value="INR">₹ (INR)</option>
                <option value="USD">$ (USD)</option>
              </select>
              <input
                type="number"
                step="0.01"
                {...register("stipend", { required: "Stipend is required", min: 0 })}
                className="w-full p-2 border rounded-r"
              />
            </div>
            {errors.stipend && <p className="text-red-500">{errors.stipend.message}</p>}
          </div>

          <div>
            <label className="block font-semibold">Duration (in months)</label>
            <input
              type="number"
              {...register("duration", { required: "Duration is required", min: 1 })}
              className="w-full p-2 border rounded"
            />
            {errors.duration && <p className="text-red-500">{errors.duration.message}</p>}
          </div>

          <div>
            <label className="block font-semibold">Starting Date</label>
            <input
              type="date"
              {...register("starting_date", { required: "Starting date is required" })}
              className="w-full p-2 border rounded"
            />
            {errors.starting_date && <p className="text-red-500">{errors.starting_date.message}</p>}
          </div>

          <div className="flex items-center">
            <input type="checkbox" {...register("is_immediate")} className="mr-2" />
            <label className="font-semibold">Immediate Start</label>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Post Internship
          </button>
        </form>
      </div>
    </>
  );
};
