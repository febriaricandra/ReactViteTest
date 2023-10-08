import React from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCreateUser } from "../../../domain/services/UserService.jsx";

export default function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { mutate, isLoading } = useCreateUser();

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await mutate(data);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Data gagal ditambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <>
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 my-4"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
            >
              Dashboard
            </Link>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-3 h-3 mx-1 text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Create
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6">
            <label
              for="name"
              className="block mb-2 text-sm font-medium text-black"
            >
              Nama
            </label>
            <input
              {...register("name", { required: true, minLength: 8 })}
              type="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
              placeholder="nama"
              required
            />
            {errors.name ? (
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">Oh, snapp!</span> Some error message.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <label for="alamat" className="block mb-2 text-sm font-medium">
              Alamat
            </label>
            <textarea
              {...register("address", { required: true, minLength: 4 })}
              id="Alamat"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="alamat"
            ></textarea>
            {errors.address ? (
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">Oh, snapp!</span> Some error message.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="mb-6">
            <div className="flex">
              <div className="flex items-center mr-4">
                <input
                  {...register("gender", { required: "Gender cannot be null" })}
                  type="radio"
                  value="l"
                  className="w-4 h-4 text-blue-600 text-black bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                />
                <label for="inline-radio" className="ml-2 text-sm font-medium">
                  Pria
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  {...register("gender", { required: "Gender cannot be null" })}
                  type="radio"
                  value="p"
                  className="w-4 h-4 text-blue-600 text-black bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
                />
                <label
                  for="inline-2-radio"
                  className="ml-2 text-sm font-medium"
                >
                  Wanita
                </label>
              </div>
              {errors.gender ? (
                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                  <span class="font-medium">Oh, snapp!</span> Some error
                  message.
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="mb-6">
            <label for="date" className="block mb-2 text-sm font-medium">
              Tanggal Lahir
            </label>
            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                {...register("born_date", { required: true })}
                datepicker
                type="date"
                className=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                placeholder="Select date"
              />
            </div>
            {errors.born_date ? (
              <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                <span class="font-medium">Oh, snapp!</span> Some error message.
              </p>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? "Loading..." : "Create"}
          </button>
        </form>
      </div>
    </>
  );
}
