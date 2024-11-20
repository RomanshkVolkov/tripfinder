export const FBIcon: React.FC<React.SVGAttributes<{}>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <g clipPath="url(#clip0_403_116)">
        <path
          fill="#111"
          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.563V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
        ></path>
        <path
          fill="#fff"
          d="M13.893 12.89l.443-2.89h-2.774V8.125c0-.79.388-1.563 1.63-1.563h1.261v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V10h-2.54v2.89h2.54v6.988c1.035.163 2.09.163 3.124 0v-6.987h2.33z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_403_116">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};
