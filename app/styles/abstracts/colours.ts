type ActionColours = {
  default: string;
  hover: string;
  active: string;
  loading: string;
  disabled: string;
};

type ThemeColours = {
  primary: string;
  secondary: string;
  text: string;
  accent: string;
  action: ActionColours;
};

export type ColourScheme = {
  dark: ThemeColours;
  light: ThemeColours;
};

export const colours: ColourScheme = {
  dark: {
    primary: "#111224",
    secondary: "#14152C",
    text: "#FAEBD7",
    accent: "#FCA311",
    action: {
      default: "#5558B5",
      hover: "#686CDE",
      active: "#191A35",
      loading: "#42448C",
      disabled: "#2F3063",
    },
  },
  light: {
    primary: "#FAEBD7",
    secondary: "#FFE4AF",
    text: "#38383B",
    accent: "#FCA311",
    action: {
      default: "#FFD076",
      hover: "#DBB265",
      active: "#B39152",
      loading: "#8A7B5F",
      disabled: "#8A7B5F",
    },
  },
};

export default colours;