import { extendTheme } from '@chakra-ui/react';

import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700-italic.css';

const solidButtonBasicStyle = {
  color: 'white',
  fontSize: '1.4rem',
  fontWeight: '600',
  borderRadius: '3rem',
  backgroundColor: '#000',
  padding: 0,
  _disabled: {
    // opacity: 0.4,
    cursor: 'not-allowed',
  },
};
const theme = extendTheme({
  breakpoints: {
    base: '20em', // 默认
    sm: '30em', // 小屏幕
    md: '48em', // 中等屏幕
    lg: '68em', // 大屏幕
    xl: '82em',
  },
  colors: {
    theme: 'rgba(255, 177, 85, 1)',
  },
  styles: {
    global: {
      // styles for the `body`
      body: {
        bg: '#fff',
        color: '#000',
        fontFamily: 'Montserrat',
        fontSize: '1.4rem',
        fontWeight: 500,
      },
    },
  },
  textStyles: {
    title: {
      fontFamily: 'Montserrat',
      fontSize: '1.4rem',
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: 'none',
        },
      },
      variants: {
        normal: {
          bg: '#000000',
          ...solidButtonBasicStyle,
        },
      },
    },
  },
});

export default theme;
