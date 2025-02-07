"use client";
import { UserList } from "@/user/components/UserList";
import { useGetUsers } from "@/user/hooks/useGetUser";

export const RandomUsers = () => {
  const { data, hasNextPage, fetchNextPage } = useGetUsers();
  const users = data?.pages.flatMap((page) => page.results) || [];

  return (
    <div className="container mx-auto mt-10 px-4">
      <UserList users={users} mode="random" />
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          className="mt-6 bg-secondary float-end text-white mb-16 px-4 py-2 rounded-lg"
        >
          Load More
        </button>
      )}
    </div>
  );
};
