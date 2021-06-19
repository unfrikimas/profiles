import * as React from "react"

function Background(props) {
  return (
    <svg
      width={415}
      height={948}
      viewBox="0 0 360 948"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path d="M450-12H-90v960h540V-12z" fill="#fff" />
        <g filter="url(#prefix__filter0_f)">
          <path
            d="M-81 1163c200.479 0 363-162.52 363-363 0-200.479-162.521-363-363-363s-363 162.521-363 363c0 200.48 162.521 363 363 363z"
            fill="#FDE0E0"
          />
          <path
            d="M170 1052c200.479 0 363-162.521 363-363S370.479 326 170 326c-200.48 0-363 162.521-363 363s162.52 363 363 363z"
            fill="#fff"
          />
          <path
            d="M274 594c200.479 0 363-162.521 363-363 0-200.48-162.521-363-363-363C73.52-132-89 30.52-89 231c0 200.479 162.52 363 363 363z"
            fill="#FDE0E0"
          />
          <path
            d="M320 800c200.479 0 363-162.521 363-363S520.479 74 320 74-43 236.521-43 437s162.521 363 363 363z"
            fill="#FDE0E0"
          />
          <path
            d="M50 603c200.479 0 363-162.521 363-363 0-200.48-162.521-363-363-363S-313 39.52-313 240c0 200.479 162.521 363 363 363z"
            fill="#fff"
          />
          <path
            d="M439 1083c200.479 0 363-162.521 363-363S639.479 357 439 357 76 519.521 76 720s162.521 363 363 363z"
            fill="#FDE0E0"
          />
        </g>
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(-90 -12)"
            d="M0 0h540v960H0z"
          />
        </clipPath>
        <filter
          id="prefix__filter0_f"
          x={-770}
          y={-458}
          width={1898}
          height={1947}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={163} result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  )
}

export default Background
