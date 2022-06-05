import { StyleSheet,TouchableOpacity } from "react-native";
import React from "react";
import _sizes from "../../../constants/sizes";
import { _theme } from "../../../constants/theme";
export default function BtnTow({ style, children, ...rest }) {
  const btn_styles = StyleSheet.compose(styles.button, style);
  return (
    <TouchableOpacity style={btn_styles} {...rest}>
      {children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding: _sizes.size[0],
        backgroundColor: _theme.red,
        margin: _sizes.size[0]/2,
        borderRadius:1000,
    }
});
