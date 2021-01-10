import * as React from "react"

export default function IconMenu(props) {
  return (
    <svg
      height={21}
      viewBox="0 0 21 21"
      width={21}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <g stroke="#2a2e3b" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7.5 6.5h8M7.5 10.498h5M7.5 14.5h8" />
        </g>
        <path
          d="M4.499 7.5c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.999.5-.999 1 .499 1 .999 1z"
          fill="#2a2e3b"
        />
      </g>
    </svg>
  )
}

