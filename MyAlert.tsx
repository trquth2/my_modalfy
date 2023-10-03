import {Alert} from 'react-native';
import Toast from 'react-native-root-toast';
import {i18n} from '~/localization';
import {isIOS} from '~/utils';

export const DELAY_TIME = Toast.durations.SHORT + 100;
export const showToast = (text?: string) => {
  Toast.show(text ? text : '', {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
};
export function showMessage(
  message?: string,
  callbackButtonOk?: () => void,
  title?: string,
) {
  setTimeout(
    () => {
      Alert.alert(
        title ? title : i18n.t('warning'),
        message,
        [
          {
            text: i18n.t('ok'),
            onPress: () => callbackButtonOk && callbackButtonOk(),
          },
        ],
        {cancelable: false},
      );
    },
    isIOS ? 330 : 0,
  );
}

export function showMessageCancelOk(
  message: string,
  callbackButtonOk?: () => void,
  title?: string,
) {
  setTimeout(
    () => {
      Alert.alert(
        title ? title : i18n.t('warning'),
        message,
        [
          {
            text: i18n.t('cancel'),
            //onPress: () => callbackButtonCancel && callbackButtonCancel(),
          },
          {
            text: i18n.t('ok'),
            onPress: () => callbackButtonOk && callbackButtonOk(),
          },
        ],
        {cancelable: false},
      );
    },
    isIOS ? 330 : 0,
  );
}

export function showMessageWithButton(
  message?: string,
  button?: {
    okButton?: {title: string; action?: () => void};
  },
  title?: string,
) {
  setTimeout(
    () => {
      Alert.alert(
        title ? title : i18n.t('warning'),
        message,
        [
          {
            text: button?.okButton?.title ?? i18n.t('ok'),
            onPress: () =>
              button?.okButton?.action && button?.okButton?.action?.(),
          },
        ],
        {cancelable: false},
      );
    },
    isIOS ? 330 : 0,
  );
}
