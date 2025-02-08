"use client";

import { BaseUserCard } from "@/user/components/BasedUserCard";
import { useSavedUsers } from "@/user/hooks/useSavedUsers";
import { LocationCords, User, UserCardAction } from "@/user/types";
import { WeatherModal } from "@/weather/components/WeatherModal";
import { useState } from "react";

interface UserListProps {
  users: User[];
  mode: "random" | "saved";
}

export const UserList = ({ users, mode }: UserListProps) => {
  const [selectedCoords, setSelectedCoords] = useState<LocationCords | null>(
    null
  );
  const { saveUser, removeUser, savedUsers } = useSavedUsers();

  const getActionButton = (user: User): UserCardAction => {
    if (mode === "random") {
      const isUserSaved = savedUsers?.some(
        (savedUser: User) => savedUser.login.uuid === user.login.uuid
      );
      return {
        onClick: () => saveUser(user),
        disabled: isUserSaved,
        text: isUserSaved ? "Saved" : "Save",
        variant: isUserSaved ? "disabled" : "primary",
      };
    }
    return {
      onClick: () => removeUser(user.login.uuid),
      disabled: false,
      text: "Remove",
      variant: "secondary",
    };
  };

  return (
    <>
      {users.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {users.map((user) => (
            <BaseUserCard
              key={user.login.uuid}
              {...user}
              onWeatherClick={() =>
                setSelectedCoords(user.location.coordinates)
              }
              actionButton={getActionButton(user)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No Saved Users...</p>
      )}
      {selectedCoords && (
        <WeatherModal
          {...selectedCoords}
          onClose={() => setSelectedCoords(null)}
        />
      )}
    </>
  );
};
