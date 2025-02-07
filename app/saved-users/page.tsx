import { SavedUsers } from "@/user/components/saved-users/SavedUsers";

export default function SavedUsersPage() {
  return (
    <div className="container mx-auto px-4 mt-12">
      <div className="px-4 text-2xl">
        <div className="  bg-white p-6 flex flex-col mt-16  rounded-lg mx-auto items-center max-w-xl text-dark">
          Saved Users
        </div>
      </div>

      <SavedUsers />
    </div>
  );
}
