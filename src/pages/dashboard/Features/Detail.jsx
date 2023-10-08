import React from "react";
import { Link, useParams } from "react-router-dom";
import { strTime } from "../../../utils/strTime";
import { useUserById } from "../../../domain/services/UserService";

export default function Detail() {
    const { userId } = useParams();
    const { data, isLoading, isError } = useUserById(userId);
    console.log(data);
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
                                View
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-black-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Alamat
                            </th>
                            <th scope="col" className="px-6 py-3">
                                P/W
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal Lahir
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal Input
                            </th>
                        </tr>
                    </thead>
                    {data && (
                        <tbody>
                            <tr className="bg-white">
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-black whitespace-nowrap"
                                >
                                    {data.data.id}
                                </th>
                                <td className="px-6 py-4">{data.data.name}</td>
                                <td className="px-1 py-4">{data.data.address}</td>
                                <td className="px-4 py-4">{data.data.gender == "l" ? "Pria" : "Wanita"}</td>
                                <td className="px-4 py-4">{data.data.born_date}</td>
                                <td className="px-4 py-4">{strTime(data.data.created_at)}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        </>
    );
}
