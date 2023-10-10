import { FC } from "react";

interface LoadingBarProps {
  className?: string;
}

const LoadingBar: FC<LoadingBarProps> = ({ className }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <span className="loading loading-ball loading-lg"></span>
    </div>
  );
};

export default LoadingBar;
