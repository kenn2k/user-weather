"use client";

import { SAVED_USERS_KEY } from "@/user/constants/queryKeys";
import { userService } from "@/user/services/userService";
import { User } from "@/user/types";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useSavedUsers = () => {
  const queryClient = useQueryClient();

  const { data: savedUsers = [] } = useQuery({
    queryKey: SAVED_USERS_KEY,
    queryFn: userService.getSavedUsers,
    staleTime: Infinity,
  });

  const { mutate: saveUser, isPending: isSaving } = useMutation({
    mutationFn: (user: User) => userService.saveUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SAVED_USERS_KEY });
    },
  });

  const { mutate: removeUser, isPending: isRemoving } = useMutation({
    mutationFn: (userId: string) => userService.removeUser(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: SAVED_USERS_KEY });
    },
  });

  return {
    savedUsers,
    saveUser,
    removeUser,
    isSaving,
    isRemoving,
  };
};
