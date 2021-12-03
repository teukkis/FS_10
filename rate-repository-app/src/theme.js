import { Platform } from 'react-native';


const theme = {
  appBar: {
    backgroundColor: "#24292e",
  },
  colors: {
    textWhite: '#ffffff',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#0366d6',
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
  backgrounds: {
    languageTag: '#0366d6'
  },
  formTextFields: {
    borders: '1px solid #999999'
  }
};

export default theme;
