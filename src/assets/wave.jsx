export default function Wave({ width, height, props }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 210.27 42.192"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M138.88 264.76c-12.171.833-21.475.236-34.957-4.122-48.096-15.55-78.247 7.069-103.93-2.677v39.233h210.27v-39.233c-2.659-1.21-19.592-2.701-31.242-.789-14.147 2.323-26.813 6.676-40.147 7.588z"
        fillRule="evenodd"
        fill="#000"
        transform="translate(0 -255)"
      />
    </svg>
  );
}
