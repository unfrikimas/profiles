import * as React from "react"

export default function IconInfo(props) {
  return (
    <svg
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <circle
          cx={10.5}
          cy={10.5}
          r={8}
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.5 14.5v-4"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={10.5} cy={7.5} fill="#fff" r={1} />
      </g>
    </svg>
  )
}