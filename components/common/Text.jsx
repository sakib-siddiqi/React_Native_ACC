import { Text as RNTEXT, StyleSheet } from "react-native";
import React from "react";
import { _text_preset } from "../../constants/typography";

export default function Text({
  children = "",
  preset = "text",
  style = {},
  ...rest
}) {
  const styles = StyleSheet.compose(_text_preset[preset], style);
  return (
    <RNTEXT style={styles} {...rest}>
      {children}
    </RNTEXT>
  );
}
