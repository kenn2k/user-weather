import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-[calc(100vh-96px)] p-4 text-dark items-center justify-center  text-center ">
      <div className=" p-8 rounded-lg flex flex-col gap-4 bg-white">
        <h1 className="text-3xl font-bold">Welcome to the App!</h1>
        <p className="text-gray-500">Choose an option to get started:</p>
        <div className="flex space-x-4">
          <Link
            href="/random-users"
            className="px-4 bg-dark rounded-md text-white py-2 "
          >
            View Random Users
          </Link>
          <Link
            href="/saved-users"
            className="px-4 bg-dark  rounded-md text-white py-2 "
          >
            View Saved Users
          </Link>
        </div>
      </div>
    </div>
  );
}
