import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MenuToggler = (props) => (
  <Svg
  width={props.width || 24}
  height={props.height || 18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M3 13h12M3 5h18"
      stroke="#fff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default MenuToggler
