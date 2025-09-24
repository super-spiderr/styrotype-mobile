import React from "react";
import { Text, TextProps } from "react-native";
import { typography, TypographyVariants, TypographyWeight } from "../../../theme/typography";
import { fonts } from "../../../theme/fonts";
import { useTheme } from "../../../providers/ThemeProvider";

type ThemedTextProps = TextProps & {
  variant?: TypographyVariants;
  weight?: TypographyWeight;
  italic?: boolean;
  transform?: "uppercase" | "lowercase" | "capitalize" | "none";
  color?: string; // manual override
};

export const ThemedText: React.FC<ThemedTextProps> = ({
  variant = "body",
  weight = "Regular",
  italic = false,
  transform = "none",
  color,
  style,
  children,
  ...props
}) => {
  const theme = useTheme();
  const baseStyle = typography.variants[variant];

  const fontKey = italic ? `${weight}Italic` : weight;
  const fontFamily = (fonts.Cabin as any)[fontKey];

  return (
    <Text
      style={[
        {
          fontSize: baseStyle.fontSize,
          fontFamily,
          textTransform: transform,
          color: color ?? theme.colors[baseStyle.color as keyof typeof theme.colors], 
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};
