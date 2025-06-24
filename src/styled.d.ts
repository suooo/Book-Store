import "styled-components";
import type {
  Theme,
  ThemeName,
  ColorKey,
  HeadingSize,
  ButtonSize,
  ButtonScheme,
} from "./style/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    name: ThemeName;
    color: {
      [key in ColorKey]: string;
    };
    heading: {
      [key in HeadingSize]: {
        fontSize: string;
      };
    };
    button: {
      [key in ButtonSize]: {
        fontSize: string;
        padding: string;
      };
    };
    buttonScheme: {
      [key in ButtonScheme]: {
        color: string;
        backgroundColor: string;
      };
    };
    borderRadius: {
      default: string;
    };
  }
}
