interface ButtonCounterProps {
  label: string;
  onClick: () => void;
  size?: "sm" | "md" | "lg";
}

const ButtonCounter = ({ label, onClick, size = "sm" }: ButtonCounterProps) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={onClick}
        className={`${sizeClasses[size]} bg-blue-500 rounded-md text-white`}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonCounter;
