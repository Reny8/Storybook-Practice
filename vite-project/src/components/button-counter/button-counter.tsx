interface ButtonCounterProps {
  label: string;
  onClick: () => void;
  size: "sm" | "md" | "lg";
  backgroundColor?: string;
}

const ButtonCounter = ({
  label = "Click me",
  onClick,
  size = "sm",
  backgroundColor = "black",
}: ButtonCounterProps) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };
  return (
    <div>
      <button
        onClick={onClick}
        className={`${sizeClasses[size]} rounded-md text-white hover:cursor-pointer hover:shadow-xl transition duration-300 ease-in-out active:scale-95 active:shadow-none`}
        style={{ backgroundColor }}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonCounter;
