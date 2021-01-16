import * as React from "react"

export default function IconFechaEntrada(props) {
  return (
    <svg
      viewBox="0 0 21 21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 2)">
        <path
          d="M2.5.5h12.027a2 2 0 012 2v11.99a2 2 0 01-2.01 2L2.49 16.434a2 2 0 01-1.99-2V2.5a2 2 0 012-2zM.5 4.5h16.027"
          stroke="#7f7f81"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={12.5} cy={12.5} fill="#2a2e3b" r={1} />
      </g>
    </svg>
  )
}