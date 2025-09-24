export const typography = {
  variants: {
    h1: { fontSize: 32, color: "text" },
    h2: { fontSize: 24, color: "text" },
    h3: { fontSize: 20, color: "text" },
    bodyLarge: { fontSize: 18, color: "text" },
    body: { fontSize: 16, color: "text" },
    bodySmall: { fontSize: 14, color: "secondaryText" },
    caption: { fontSize: 12, color: "caption" },
  },
};

export type TypographyVariants = keyof typeof typography.variants;
export type TypographyWeight = "Regular" | "Medium" | "SemiBold" | "Bold";
