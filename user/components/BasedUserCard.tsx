import { ActionButtons } from "@/user/components/user-card-parts/CardActions";
import { Avatar } from "@/user/components/user-card-parts/CardAvatar";
import { UserInfo } from "@/user/components/user-card-parts/CardInfo";
import { User, UserCardAction } from "@/user/types";

interface IUser extends User {
  onWeatherClick: () => void;
  actionButton: UserCardAction;
}

export const BaseUserCard = ({
  name,
  gender,
  email,
  location,
  picture,
  onWeatherClick,
  actionButton,
}: IUser) => (
  <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="text-dark flex items-center flex-col justify-center space-y-3">
      <Avatar picture={picture} />
      <UserInfo name={name} gender={gender} location={location} email={email} />
      <ActionButtons
        onWeatherClick={onWeatherClick}
        actionButton={actionButton}
      />
    </div>
  </div>
);
