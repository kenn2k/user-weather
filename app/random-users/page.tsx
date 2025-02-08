import { RandomUsers } from "@/user/components/random-users/RandomUser";

const UsersPage = () => {
  return (
    <div className="text-accent mx-auto  container text-2xl">
      <div className="px-4">
        <div className="  bg-white p-6 flex flex-col mt-16 border-2 border-gray-50 shadow-md  rounded-lg mx-auto items-center max-w-xl text-dark">
          Welcome to The Random Users Page
        </div>
      </div>

      <RandomUsers />
    </div>
  );
};
export default UsersPage;
