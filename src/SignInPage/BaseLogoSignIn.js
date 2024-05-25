export const BaseLogoSignIn = ({ smallScreen = false }) => {
  return (
    <svg width={`${smallScreen ? "40" : "81"}`} height={`${smallScreen ? "40" : "81"}`} viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40.5" cy="40.5" r="40.5" fill="#FCFCFF" />
      <g transform="translate(-3, 25) scale(1)">
        <path d="M2.02979 11.0531L32.0871 25.7478L58.8048 3.70578L84.8545 17.0646" stroke="#605BFF" stroke-width="6"/>
      </g>
    </svg> 
  );
}