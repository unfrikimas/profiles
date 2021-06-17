import * as React from "react"

function Web(props) {
  return (
    <svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 8.75A1.25 1.25 0 0016.25 10v10a1.25 1.25 0 001.25 1.25h5A1.25 1.25 0 0023.75 20V10a1.25 1.25 0 00-1.25-1.25h-5zm3.75 2.5h-2.5v7.5h2.5v-7.5z"
        fill="#000"
      />
      <path
        d="M7.5 8.75a1.25 1.25 0 000 2.5h5a1.25 1.25 0 000-2.5h-5zM7.5 13.75a1.25 1.25 0 000 2.5h5a1.25 1.25 0 000-2.5h-5zM6.25 20a1.25 1.25 0 011.25-1.25h5a1.25 1.25 0 010 2.5h-5A1.25 1.25 0 016.25 20z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3.75A3.75 3.75 0 001.25 7.5v15A3.75 3.75 0 005 26.25h20a3.75 3.75 0 003.75-3.75v-15A3.75 3.75 0 0025 3.75H5zm20 2.5H5A1.25 1.25 0 003.75 7.5v15A1.25 1.25 0 005 23.75h20a1.25 1.25 0 001.25-1.25v-15A1.25 1.25 0 0025 6.25z"
        fill="#000"
      />
    </svg>
  )
}

export default Web