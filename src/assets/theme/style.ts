export const themeColors = {
  primary: '#4DA2CE',
  secondary: '#393939',
  body: '#333333',
  black: '#000000',
  white: '#ffffff',
  green: '#57B795',
  success: '#3CC60A',
  error: '#E4333E',
  warning: '#F29D39',
  bg:{
    body: '#599BB3',
    surface: "#F3F3F4",
    surfaceHover: "#efeff3"
  },
  border:{
    primary: '#c3d9d0',
    primaryHover: '#45B08B'
  },
  button: {
    primary: '#7459B3',
    primaryHover: '#9259B3',
  },
  chip:{
    high: "#596CB3",
    medium: "#598BB3",
    low: "#59AAB3"
  }
};


const breakpoints = {
  xs: '480px',    // Extra small devices (portrait phones)
  sm: '768px',    // Small devices (landscape phones, small tablets)
  md: '1024px',   // Medium devices (tablets, large phones)
  lg: '1280px',   // Large devices (laptops, small desktops)
  xl: '1440px',   // Extra large devices (desktops, large screens)
};

// Create media queries using the breakpoints
export const devices = {
  xs: `(max-width: ${breakpoints.xs})`,
  sm: `(max-width: ${breakpoints.sm})`,
  md: `(max-width: ${breakpoints.md})`,
  lg: `(max-width: ${breakpoints.lg})`,
  xl: `(max-width: ${breakpoints.xl})`,
};