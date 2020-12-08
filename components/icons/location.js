import * as React from "react"

export default function IconLocation (props) {
  return (
    <svg
      height={21}
      viewBox="0 0 21 21"
      width={21}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#a5b5ce"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4 2)"
      >
        <path d="M6.5 16.54c4-4.45 6-7.785 6-10.007C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 2.222 2 5.558 6 10.008z" />
        <circle cx={6.5} cy={6.5} r={2.5} />
      </g>
    </svg>
  )
}
