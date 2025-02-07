import { usersApiInstance } from "@/user/api/userService";
import { User, UserResponse } from "@/user/types";

export const userService = {
  getUsers: async (page: number) => {
    const { data } = await usersApiInstance.get<UserResponse>("", {
      params: { results: 4, page },
    });
    return data;
  },

  getSavedUsers: async () => {
    const savedUsers = localStorage.getItem("saved-users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  },

  saveUser: async (user: User) => {
    const currentUsers = await userService.getSavedUsers();
    const isUserExists = currentUsers.some(
      (u: User) => u.login.uuid === user.login.uuid
    );

    if (!isUserExists) {
      const updatedUsers = [...currentUsers, user];
      localStorage.setItem("saved-users", JSON.stringify(updatedUsers));
      return updatedUsers;
    }

    return currentUsers;
  },

  removeUser: async (userId: string) => {
    const currentUsers = await userService.getSavedUsers();
    const updatedUsers = currentUsers.filter(
      (user: User) => user.login.uuid !== userId
    );
    localStorage.setItem("saved-users", JSON.stringify(updatedUsers));
    return updatedUsers;
  },
};
