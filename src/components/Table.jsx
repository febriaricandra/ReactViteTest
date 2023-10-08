import React from "react";
import { Link } from "react-router-dom";
import { strTime } from "../utils/strTime";
const Table = ({ headers,users, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  return (
    <table className="w-full text-sm text-left text-gray-500 ">
      <thead className="text-xs text-black-700 uppercase bg-gray-50">
        <tr>
          {headers.map((header, index) => (
            <th scope="col" className="px-6 py-3" key={index}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {users.length === 0 ? (
          <tr>
            <td colSpan="7" className="text-center">
              Data Kosong
            </td>
          </tr>
        ) : (
          users.map((user, index) => (
            <tr className="bg-white" key={user.id}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-black whitespace-nowrap"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">{user.name}</td>
              <td className="px-6 py-4">{user.address}</td>
              <td className="px-6 py-4">
                {user.gender == "p" ? "Wanita" : "Pria"}
              </td>
              <td className="px-6 py-4">{user.born_date}</td>
              <td className="px-6 py-4">{strTime(user.created_at)}</td>
              <td>
                <Link to={`/dashboard/view/${user.id}`}>[Detail]</Link>
                <Link to={`/dashboard/edit/${user.id}`}>[Edit]</Link>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;