import Api from "../../utils/Api";
import { useQuery, useMutation } from "@tanstack/react-query";

const getUserData = async () => {
  const response = await Api.get("/user");
  return response.data;
};

const getUserById = async (id) => {
  const response = await Api.get(`/user/${id}`);
  return response.data;
};

const createUser = async (data) => {
  const response = await Api.post("/user", data);
  return response.data;
};

const updateUser = async (id, data) => {
  const response = await Api.put(`/user/${id}`, data);
  return response.data;
};

const deleteUser = async (id) => {
  const response = await Api.delete(`/user/${id}`);
  return response.data;
};

export const useUserData = () => {
  return useQuery(["user"], getUserData);
};

export const useUserById = (id) => {
  return useQuery(["user", id], () => getUserById(id));
};

export const useUpdateUser = () => {
  return useMutation(updateUser, {
    onSuccess: () => {
      console.log("User updated successfully");
      getUserData();
    },
    onError: (error) => {
      console.error("Error updating user:", error);
      throw new Error(error);
    },
  });
};

export const useCreateUser = () => {
  return useMutation(createUser, {
    onSuccess: () => {
      console.log("User created successfully");
      getUserData();
    },
    onError: (error) => {
      console.error("Error creating user:", error);
      throw new Error(error);
    },
  });
};

export const useDeleteUser = () => {
  return useMutation(deleteUser, {
    onSuccess: () => {
      console.log("User deleted successfully");
      getUserData();
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
      throw new Error(error);
    },
  });
};
