import { UserLocation, UserName } from "@/user/types";

interface UserInfoProps {
  gender: string;
  name: UserName;
  location: UserLocation;
  email: string;
}

export const UserInfo = ({ gender, name, location, email }: UserInfoProps) => {
  return (
    <>
      <div className="text-lg text-center">{gender}</div>
      <div className="font-semibold text-lg text-center">
        {name.title}. {name.first} {name.last}
      </div>
      <div className="text-center w-full text-base md:text-sm">
        {location.street.number}, {location.street.name}
      </div>
      <div className="text-center w-full text-base md:text-sm">
        {location.city}, {location.country}
      </div>
      <div className="whitespace-nowrap text-center break-words w-full text-sm md:text-base">
        {email}
      </div>
    </>
  );
};
