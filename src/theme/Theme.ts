const colors = {
  background_primary: "#3CB371",
  background_secondary: "#8FBC8F",
  primary: "#2E8B57",
  secondaire: "#F4A460",
  important: "#D2691E",
  red: "#ff0000",
  white: "#fff",
  greyLight: "#e4e5e9",
} as const;

type Colors = typeof colors;

type ThemeType = {
  colors: Colors;
};

export const theme: ThemeType = {
  colors,
};
