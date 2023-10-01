import React from "react";

interface Props {
  className: any;
}

export function NextIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      className={className}
      baseProfile="basic"
    >
      <linearGradient
        id="NRNx2IPDe7PJlJvrxOKgWa"
        x1="24"
        x2="24"
        y1="43.734"
        y2="4.266"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="#0a070a" />
        <stop offset=".465" stop-color="#2b2b2b" />
        <stop offset="1" stop-color="#4b4b4b" />
      </linearGradient>
      <circle cx="24" cy="24" r="19.734" fill="url(#NRNx2IPDe7PJlJvrxOKgWa)" />
      <rect width="3.023" height="15.996" x="15.992" y="16.027" fill="#fff" />
      <linearGradient
        id="NRNx2IPDe7PJlJvrxOKgWb"
        x1="30.512"
        x2="30.512"
        y1="33.021"
        y2="18.431"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".377" stop-color="#fff" stop-opacity="0" />
        <stop offset=".666" stop-color="#fff" stop-opacity=".3" />
        <stop offset=".988" stop-color="#fff" />
      </linearGradient>
      <rect
        width="2.953"
        height="14.59"
        x="29.035"
        y="15.957"
        fill="url(#NRNx2IPDe7PJlJvrxOKgWb)"
      />
      <linearGradient
        id="NRNx2IPDe7PJlJvrxOKgWc"
        x1="22.102"
        x2="36.661"
        y1="21.443"
        y2="40.529"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".296" stop-color="#fff" />
        <stop offset=".521" stop-color="#fff" stop-opacity=".5" />
        <stop offset=".838" stop-color="#fff" stop-opacity="0" />
      </linearGradient>
      <polygon
        fill="url(#NRNx2IPDe7PJlJvrxOKgWc)"
        points="36.781,38.094 34.168,39.09 15.992,16.027 19.508,16.027"
      />
    </svg>
  );
}
