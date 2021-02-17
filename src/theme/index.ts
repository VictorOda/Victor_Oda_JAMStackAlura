const colors = {
  darkTheme: {
    background: '#292F35',
    mainText: '#FFF',
    secondaryText: '#5B6167',
    highlight: '#00C2DA',
  },
  lightTheme: {
    background: '#FFF',
    mainText: '#141517',
    secondaryText: '#141517',
    highlight: '#00C2DA',
  },
  hightlightTheme: {
    background: '#00C2DA',
    mainText: '#141517',
    secondaryText: '#FFF',
    highlight: '#5B6167',
  },
};

export default {
  colors,
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  borderRadius: '12px',
  transition: '200ms ease-in-out',
  fontFamily: {
    regular: '\'Fira Sans\', sans-serif',
    condensed: '\'Fira Sans Condensed\', sans-serif',
  },
};
