import { Dimensions, TouchableNativeFeedback } from "react-native";
import { ScreenReplaceTypes, StackAnimationTypes } from "react-native-screens";
import { ShadowProps } from "react-native-shadow-2";
import { ToastPosition } from "react-native-toast-message";

export const MobileWidth = Dimensions.get("window").width;
export const MobileHeight = Dimensions.get("window").height;

/* Colors */
export const Color = {
  primary: "#2196F3",
  secondary: "#EDF4FF",
  main: "#FBFBFB",
  body: "414750",
  gray600: "#2A2E34",
  gray500: "#4D545E",
  gray400: "#7B8493",
  gray100: "#ECF0F6",
  gray200: "#D0D4D9",
  gray1: "#8B939F",
  gray2: "#6A7178",
  gray3: "#414750",
  grey: "#AEB3BC",
  white: "#FFFFFF",
  bgGray: "#595959",
  placeholder: "#AEB3BC",
  placeholder_qty: "#8B939F",
  blue1: "#BBDEFB",
  blue2: "#2196F3",
  lightBlue: "#ECF0F6",
  darkBlue: "#0944A2",
  red: "#DD331D",
  error: "#DD331D",
  error1: "#FDE7E5",
  success: "#98C729",
  success2: "#F3FFD6",
  purpleGradient: ["#AA78F0", "#8F3FFF"],
  whiteGradient: ["#F2F4FF", "#F2F4FF"],
};
/* fonts */
export const FontFamily = {
  default: "MANROPE",
  item: "ROBOTO",
};

export const HeadingFont = {
  heading1: {
    fontSize: 58,
    lineHeight: 80,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
  heading2: {
    fontSize: 48,
    lineHeight: 56,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
  heading3: {
    fontSize: 40,
    lineHeight: 56,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
  heading4: {
    fontSize: 28,
    lineHeight: 32,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
  heading5: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
  heading6: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
};

export const BodyFontRegular = {
  large: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "regular" as const,
    fontFamily: FontFamily.default,
  },
  medium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "regular" as const,
    fontFamily: FontFamily.default,
  },
  mediumGray: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "regular" as const,
    fontFamily: FontFamily.default,
    color: Color.gray400
  },
  small: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "regular" as const,
    fontFamily: FontFamily.default,
  },
  xsmall: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "regular" as const,
    fontFamily: FontFamily.default,
  },
};

export const BodyFontSemiBold = {
  large: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "semibold" as const,
    fontFamily: FontFamily.default,
  },
  medium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "semibold" as const,
    fontFamily: FontFamily.default,
  },
  small: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "semibold" as const,
    fontFamily: FontFamily.default,
  },
  xsmall: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "semibold" as const,
    fontFamily: FontFamily.default,
  },
};

export const BodyFontBold = {
  large: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
  medium: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
  small: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
  xsmall: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "bold" as const,
    fontFamily: FontFamily.default,
  },
};
/* Align */
export const Align = {
  center: "center" as const,
  left: "left" as const,
  right: "right" as const,
  spaceBetween: "space-between" as const,
  flexEnd: "flex-end" as const,
  absolute: "absolute" as const,
  bottom: "bottom" as ToastPosition,
};
export const Gap = {
  gap4: 4,
  gap6: 6,
  gap8: 8,
  gap10: 10,
  gap12: 12,
  gap14: 14,
  gap16: 16,
  gap20: 20,
  gap24: 24,
  gap32: 32,
};

/* border radiuses */
export const BorderRadius = {
  b1: 1,
  b2: 2,
  b3: 3,
  b4: 4,
  b5: 5,
  b8: 8,
  b10: 10,
  width: {
    w1: 1,
  },
};
export const Icon = {
  size15: 15,
  size20: 20,
  size30: 30,
  width: 35,
  size16: 16,
};

export const Shadow = {
  color: "#ccc",
  offset: { width: 0, height: 2 },
  opacity: 0.5,
  radius: 3.84,
  elevation: 3,
};
export const Padding = {
  p5: 5,
  p8: 8,
  p10: 10,
  p12: 12,
  p14: 14,
  p16: 16,
  p20: 20,
  p24: 24,
  p29: 29,
  p30: 30,
  p32: 32,
  p40: 40,
  p48: 48,
  p50: 50,
  p240: 240,
};
export const ShadowTopStyle = {
  shadow: {
    startColor: "rgba(0, 0, 0, 0.06)",
    offset: [0, -4],
    distance: 8,
    stretch: true,
    sides: {
      top: true,
    },
  } as ShadowProps,
};


export const MainLayoutGradient = {
  start: { x: 0.4, y: 0.4 },
  end: { x: 0.4, y: 0.4 },
};

export const LogoDimension = {
  height: 141,
  width: 140,
};

export const ShadowBottomStyle = {
  shadow: {
    startColor: "rgba(0, 0, 0, 0.1)",
    offset: [0, 4],
    distance: 8,
    stretch: true,
    sides: {
      top: true,
    },
  } as ShadowProps,
};
export const ShadowDrawerBottomStyle = {
  shadow: {
    startColor: "rgba(0, 0, 0, 0.1)",
    offset: [0, 4],
    distance: 6,
    stretch: true,
    sides: {
      top: false,
    },
  } as ShadowProps,
};

export const ShadowAddAccountStyle = {
  shadow: {
    startColor: "rgba(0, 0, 0, 0.05)",
    offset: [0, 4],
    distance: 4,
    stretch: true,
  } as ShadowProps,
};

export const ShadowMfaStyle = {
  shadow: {
    startColor: "rgba(0, 0, 0, 0.05)",
    offset: [0, 6],
    distance: 4,
    stretch: true,
  } as ShadowProps,
};

export const AnimationLayout = {
  ANIMATION_TYPE: "push" as ScreenReplaceTypes,
  ANIMATION_RIGHT: "slide_from_right" as StackAnimationTypes,
  ANIMATION_TYPE_MODAL: "slide" as const,
};

export const KeyboardBehavior = {
  height: "height" as const,
  padding: "padding" as const,
};

export const Dimension = {
  w36: 36,
  h36: 36
};

export const FlexDirection = {
  row: "row" as const,
  column: "column" as const
};

export const Flex ={
  f4: 4,
  f1: 1
};

export const JustifyContent = {
  flexEnd: "flex-end" as const,
  spaceBetween: "space-between" as const
};

export const Margin = {
  auto: "auto" as const,
  m12: 12,
};

export const Height = {
  h19: 19,
};