import React from 'react'
import './index.scss'
type Props = {
  style?: { [defaultParam: string]: any }
  myClick: Function
  [defaultParam: string]: any
}
const Info = (props: Props) => {
  const { style, myClick } = props
  function handleClick() {
    myClick()
  }
  return (
    <div className="my_svg" style={style} onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        aria-hidden="true"
        className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    </div>
  )
}
export default Info
