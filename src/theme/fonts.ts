import { TextStyle } from 'react-native';

const fonts: {
  [key: string]: TextStyle;
} = {
  heading6: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 29,
    letterSpacing: 0.24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 28,
    letterSpacing: 0.15,
  },
  caption: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.24,
  },
};

export default fonts;
