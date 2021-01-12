import * as React from "react"

export default function IconLink(props) {
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
        <path d="M9.5 7.5l1-1a2.828 2.828 0 114 4l-1 1m-2 2l-2 2a2.828 2.828 0 11-4-4l2-2M7.5 13.5l5-5" />
      </g>
    </svg>
  )
}