interface IWeatherModalActions {
  onClose: () => void;
}
export const WeatherModalActions = ({ onClose }: IWeatherModalActions) => {
  return (
    <div className="mt-8">
      <button
        className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  );
};
