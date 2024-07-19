import { TextProps, Text } from "@rneui/base";
import React from "react";

export type ThemedLabelProps = TextProps & {
    label: string
}

export function ThemedLabel({
    label,
  ...rest
}: ThemedLabelProps) {

  return (
    <Text
    disabled
      style={rest.style}
      {...rest}
    >{label}</Text>
  );
}

