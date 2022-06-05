import * as React from "react"
import Svg, { Path } from "react-native-svg"

const Cart = (props) => (
  <Svg
    width={props.width || 21}
    height={props.height || 20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M4.786 4.167H19.07l-1.428 8.571H6.214L4.786 4.167ZM7.643 17.5a.952.952 0 1 0 0-1.905.952.952 0 0 0 0 1.905ZM16.214 17.5a.952.952 0 1 0 0-1.905.952.952 0 0 0 0 1.905ZM4.786 4.167H1.928"
      stroke="#fff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)

export default Cart
