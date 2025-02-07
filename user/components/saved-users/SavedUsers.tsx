"use client";
import { UserList } from "@/user/components/UserList";
import { useSavedUsers } from "@/user/hooks/useSavedUsers";

export const SavedUsers = () => {
  const { savedUsers } = useSavedUsers();

  return (
    <div className="container mx-auto mt-10 mb-16 px-4">
      <UserList users={savedUsers || []} mode="saved" />
    </div>
  );
};
