import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import { useUserData, useDeleteUser } from "../../domain/services/UserService";

import Text from "../../components/Text";
import Table from "../../components/Table";

export default function Main() {
  const { data, isLoading, error } = useUserData();
  const deleteUser = useDeleteUser();

  const headers = [
    "No",
    "Nama",
    "Alamat",
    "P/W",
    "Tanggal Lahir",
    "Tanggal Input",
    "Aksi",
  ];

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const onDelete = async (userId) => {
    try {
      await deleteUser.mutateAsync(userId);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Data berhasil dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.error("Error deleting user:", error);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Data gagal dihapus",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  console.log(data);
  return (
    <>
      <nav
        className="flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 my-4"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li aria-current="page">
            <div className="flex items-center">
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                Dashboard
              </span>
            </div>
          </li>
        </ol>
      </nav>

      <div className="relative overflow-x-auto">
        <Table headers={headers} users={data.data} onDelete={onDelete} />
      </div>
      {createPortal(<Text />, document.body)}
    </>
  );
}
