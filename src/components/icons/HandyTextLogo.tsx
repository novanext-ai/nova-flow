import React from "react";

// Nova Flow wordmark (replaces the upstream Handy hand-drawn logotype).
const HandyTextLogo = ({
  width,
  height,
  className,
}: {
  width?: number;
  height?: number;
  className?: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 600 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="300"
        y="82"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="76"
        fontWeight="700"
        letterSpacing="-2"
        className="logo-primary"
      >
        Nova Flow
      </text>
    </svg>
  );
};

export default HandyTextLogo;
