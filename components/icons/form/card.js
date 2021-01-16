import * as React from "react"

export default function IconCard(props) {
  return (
    <svg
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18.5 14.5v-9a2 2 0 00-2-2h-12a2 2 0 00-2 2v9a2 2 0 002 2h12a2 2 0 002-2z" />
        <path d="M8.5 13.5v-7a1 1 0 00-1-1h-2a1 1 0 00-1 1v7a1 1 0 001 1h2a1 1 0 001-1zM16.5 7.5v-1a1 1 0 00-1-1h-4a1 1 0 00-1 1v1a1 1 0 001 1h4a1 1 0 001-1zM16.5 13.5v-2a1 1 0 00-1-1h-4a1 1 0 00-1 1v2a1 1 0 001 1h4a1 1 0 001-1z" />
      </g>
    </svg>
  )
}