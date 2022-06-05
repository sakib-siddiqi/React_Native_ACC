import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import _sizes from "../../../constants/sizes";
import { _theme } from "../../../constants/theme";
import Text from "../Text";

export default function BtnOne({ style = {},children=<Text>Button</Text>, ...rest }) {
  const btn_styles = StyleSheet.compose(styles.button, style);
  return (
    <TouchableOpacity style={btn_styles} {...rest}>
        {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: _sizes.size[0],
    backgroundColor: _theme.green,
    marginTop: _sizes.size[0],
    borderRadius:(_sizes.size[0]/2)+1,
    justifyContent:'center',
    alignItems:'center'
  },
});
