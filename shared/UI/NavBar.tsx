import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="  bg-secondary h-24 ">
      <div className="max-w-7xl text-white mx-auto flex h-full text-xl items-center justify-center gap-8">
        <Link
          className="hover:text-teal-200 transition-colors"
          href="/random-users"
        >
          Random Users
        </Link>
        <Link
          className="hover:text-teal-200 transition-colors"
          href="/saved-users"
        >
          Saved Users
        </Link>
      </div>
    </nav>
  );
};
