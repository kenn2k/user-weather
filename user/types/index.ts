export interface UserName {
  title: string;
  first: string;
  last: string;
}
export interface UserPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserStreetLocation {
  number: number;
  name: string;
}

export interface LocationCords {
  latitude: number;
  longitude: number;
}

export interface UserLocation {
  street: UserStreetLocation;
  city: string;
  country: string;
  coordinates: LocationCords;
}

interface UserLogin {
  uuid: string;
}

export interface User {
  gender: string;
  name: UserName;
  email: string;
  picture: UserPicture;
  location: UserLocation;
  login: UserLogin;
}

export interface UserResponse {
  results: User[];
  info: {
    page: number;
    results: number;
  };
}

export interface UserCardAction {
  onClick: () => void;
  disabled?: boolean;
  text: string;
  variant: "primary" | "disabled" | "secondary";
}
