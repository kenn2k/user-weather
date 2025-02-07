"use client";

import { GET_USERS_KEY } from "@/user/constants/queryKeys";
import { userService } from "@/user/services/userService";
import { UserResponse } from "@/user/types";

import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetUsers = () => {
  return useInfiniteQuery<UserResponse, Error>({
    queryKey: GET_USERS_KEY,
    queryFn: ({ pageParam = 1 }) => userService.getUsers(pageParam as number),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.info.page + 1,
  });
};
