import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';

type Props = {
  source: ImageSourcePropType;
  title: string;
  text: string;
  isOn?: boolean;
  onPress?: TouchableWithoutFeedbackProps['onPress'];
};

export default function NotificationButton({
  source,
  title,
  text,
  isOn = false,
  onPress,
}: Props) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          { backgroundColor: isOn ? colors.grey600 : colors.white },
        ]}
      >
        <Image source={source} />
        <Text style={styles.title}>{title}</Text>
        <Text style={fonts.caption}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.drakGrey,
    flex: 1,
    padding: 16,
    paddingTop: 25,
    borderRadius: 4,
  },
  title: {
    ...fonts.title,
    marginTop: 6,
    marginBottom: 4,
  },
});
