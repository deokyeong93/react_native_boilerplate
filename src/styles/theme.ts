import { configureFonts, MD3LightTheme } from 'react-native-paper';

const fontConfig = {
  fontFamily: 'NotoSansKR',
};

const theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    fonts: configureFonts({ config: fontConfig }),
  },
};

export { theme };
