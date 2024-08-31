const colors = {
  menu: "#2E8B57",
  primary: "#3CB371",
  secondaire: "#F4A460",
  background: "#8FBC8F",
  important: "#D2691E",
  white: "#fff",
  dark: "#17161a",
  greyLight: "#e4e5e9",
  greyMedium: "#a7a8ad",
  greySemiDark: "#93a2b1",
  greyDark: "#6f737e",
  greyBlue: "#747b91",
} as const;

type Colors = typeof colors;

type ThemeType = {
  colors: Colors;
};

export const theme: ThemeType = {
  colors,
};
