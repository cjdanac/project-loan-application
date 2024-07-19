import React from "react";
import {
  StyleProp,
  TextStyle,
  ViewStyle,
  TouchableOpacity,
} from "react-native";

import { ComponentStyles } from "../assets/styles/ComponentStyles";
import { ButtonProps, TextProps } from "@rneui/base";
import { ThemedView } from "./ThemedView";
import { ThemedLabel } from "./ThemedLabel";

export type ThemedButtonProps = ButtonProps &
  TextProps & {
    label?: string;
    textStyle?: StyleProp<TextStyle>;
    buttonStyle?: StyleProp<ViewStyle>;
    iconLeft?: React.ReactNode;
    icon?: React.ReactNode;
  };

export function ThemedButton({
  label,
  textStyle,
  buttonStyle,
  iconLeft,
  icon,
  ...rest
}: ThemedButtonProps) {
  return (
    <TouchableOpacity disabled={rest.disabled} onPress={rest.onPress}>
      <ThemedView style={[ComponentStyles.defaultButtonStyle, buttonStyle]}>
        {iconLeft && iconLeft}
        {rest.title && (
          <ThemedLabel style={textStyle} label={rest.title?.toString()} />
        )}
        {icon && icon}
      </ThemedView>
    </TouchableOpacity>
  );
}
