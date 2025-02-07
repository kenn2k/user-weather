import { UserCardAction } from "@/user/types";
import clsx from "clsx";

interface BasedUserCardProps {
  onWeatherClick: () => void;
  actionButton: UserCardAction;
}

export const ActionButtons = ({
  onWeatherClick,
  actionButton,
}: BasedUserCardProps) => {
  return (
    <div className="flex justify-between w-full gap-4 mt-auto">
      <button
        onClick={onWeatherClick}
        className="flex-1 bg-text text-white py-1 px-3 text-lg rounded-md hover:bg-opacity-90 transition-colors duration-200"
      >
        Weather
      </button>
      <button
        onClick={actionButton.onClick}
        disabled={actionButton.disabled}
        className={clsx(
          "flex-1 py-1 px-3 text-lg rounded-md hover:bg-opacity-90 transition-colors duration-200",
          {
            "bg-gray-400 cursor-not-allowed":
              actionButton.variant === "disabled",
            "bg-dark text-white": actionButton.variant === "primary",
            "bg-secondary text-white": actionButton.variant === "secondary",
          }
        )}
      >
        {actionButton.text}
      </button>
    </div>
  );
};
