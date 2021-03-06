import React from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';

export const SkipButton = ({
  styles,
  onSkipBtnClick,
  isSkipBtnShow,
  leftTextColor,
  skipBtnLabel,
  skipFadeOpacity,
  allowFontScaling,
  fontSize,
  skipButtonOutputRange
}) => {
  return (
    <Animated.View style={[styles.btnContainer, styles.skipBtnContainer, {
      opacity: skipFadeOpacity,
      transform: [{
        translateX: skipFadeOpacity.interpolate({
          inputRange: [0, 1],
          outputRange: skipButtonOutputRange,
        }),
      }],
    }]}
    >
      <TouchableOpacity
        style={[styles.full, styles.skipBtn]}
        onPress={isSkipBtnShow ? () => onSkipBtnClick() : null}>
        <Text allowFontScaling={allowFontScaling} style={[styles.controllText, { color: leftTextColor, fontSize }]}>
          {skipBtnLabel}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  )
}

export default SkipButton
