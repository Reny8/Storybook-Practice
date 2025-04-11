interface ButtonCounterProps {
  label: string;
  onClick: () => void;
  size: "sm" | "md" | "lg";
  backgroundColor?: string;
}

const ButtonCounter = ({
  label,
  onClick,
  size,
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
        className={`${sizeClasses[size]} rounded-md text-white`}
        style={{ backgroundColor }}
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonCounter;
