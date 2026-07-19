// Nova Flow "voice" icon — rounded waveform bars (replaces the upstream Handy
// hand drawing). Keeps the original component name and props so every existing
// import keeps working.
const HandyHand = ({
  width,
  height,
}: {
  width?: number | string;
  height?: number | string;
}) => (
  <svg
    width={width || 126}
    height={height || 135}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="fill-text"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="10" width="2.6" height="4" rx="1.3" />
    <rect x="6.4" y="7" width="2.6" height="10" rx="1.3" />
    <rect x="10.8" y="3.5" width="2.6" height="17" rx="1.3" />
    <rect x="15.2" y="6" width="2.6" height="12" rx="1.3" />
    <rect x="19.6" y="9.5" width="2.6" height="5" rx="1.3" />
  </svg>
);

export default HandyHand;
