import "styled-components";
import type { Theme, ThemeName, ColorKey } from "./style/theme";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    name: ThemeName;
    color: {
      [key in ColorKey]: string;
    };
  }
}
