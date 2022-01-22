import {extendTheme} from "@chakra-ui/react";

//     font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

export const themeDefault = extendTheme({
  config: {
    cssVarPrefix: "vertera",
  },
  fonts: {
    body: "Roboto, sans-serif",
    heading: "Roboto, serif",
    mono: "Roboto, monospace",
  },
  colors: {
    brand: {
    },
  },
  styles: {
    global: {
      a: {
        color: "green.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    Link: {

    },
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: 'none'
          }
        }
      }
    },
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none'
        }
      }
    }
  }
});
