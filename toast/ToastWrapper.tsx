import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Toast, {ToastConfig} from 'react-native-toast-message';
import {WText} from '../text';
import {DeviceInfo} from '~/utils';
import {Border, Container, Dimension, Space} from '~/config';
import {Icons} from '~/themes';
import {HSizeBox} from '../SizeBox';
import {WButtonIcon} from '../buttons';

export const ToastEnum = {
  success: 'SUCCESS_TOAST',
};
const toastConfig: ToastConfig = {
  [ToastEnum.success]: ({text1}) => (
    <View style={styles.container}>
      <View style={styles.line} />
      <View style={styles.content}>
        <Icons.successToastIco />
        <HSizeBox space={Space.xxs} />
        <WText flex={1} text={text1} />
        <HSizeBox space={Space.xxs} />
        <WButtonIcon
          transparent
          svgIcon={<Icons.CloseIco stroke={'#000000'} width={24} height={24} />}
          action={() => Toast.hide()}
        />
      </View>
    </View>
  ),
};

export const ToastWrapper = memo(() => {
  return <Toast position="top" config={toastConfig} visibilityTime={3000} />;
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: DeviceInfo.width - 2 * Dimension.MARGIN_16,
    minHeight: 50,
    borderRadius: Border.RADIUS_4,
    backgroundColor: 'white',
    ...Container.shadow,
  },
  line: {
    borderTopLeftRadius: Border.RADIUS_4,
    borderBottomLeftRadius: Border.RADIUS_4,
    width: 4,
    backgroundColor: '#1AA758',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Dimension.PADDING_8,
    paddingVertical: Dimension.PADDING,
  },
});
