export default function Wave({ width, height, props }) {
   return (
     <svg
       width={width}
       height={height}
       viewBox="0 0 2875 265"
       fill="currentColor"
       xmlns="http://www.w3.org/2000/svg"
       {...props}
     >
       <path
         d="M351.5 38.509C213.988 33.607 1 2.509 1 2.509v262h2873.5v-262s-75.89-.987-124.5 0c-160.89 3.264-249.59 38.029-410.5 36-140.7-1.775-217.87-31.453-358.5-36-207.54-6.712-323.12 46.643-530.5 36-118.23-6.069-182.74-30.604-301-36-149.19-6.809-232.807 11.245-382 18-162.444 7.354-253.493 23.792-416 18z"
         fill="#fff085"
         stroke="none"
       />
     </svg>
   );
}