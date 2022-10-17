import {
  createModalStack,
  ModalOptions,
  ModalStackConfig,
} from 'react-native-modalfy';
import {UserModel} from './models';
import {
  ChangeAddressModal,
  ChangeCountryModal,
  ChangeFullNameModal,
  ChangePasswordModal,
  ChangePhoneInputModal,
} from './screens/components';
import LoadingView from './shared/components/LoadingView';

export enum ModalViewEnum {
  Loading = 'Loading',
  ChangePassword = 'ChangePassword',
  ChangeAddress = 'ChangeAddress',
  ChangePhone = 'ChangePhone',
  ChangeCountry = 'ChangeCountry',
  ChangeFullName = 'ChangeFullName',
}

export interface ModalStackParams {
  [ModalViewEnum.ChangeAddress]: {
    userProfile: UserModel | null;
  };
  [ModalViewEnum.ChangePhone]: {
    userProfile: UserModel | null;
  };
  [ModalViewEnum.ChangeCountry]: {
    userProfile: UserModel | null;
  };
  [ModalViewEnum.ChangeFullName]: {
    userProfile: UserModel | null;
  };
}

export type ModalName = Exclude<keyof ModalStackParams, 'Loading'>;

const modalConfig: ModalStackConfig = {
  [ModalViewEnum.Loading]: LoadingView,
  [ModalViewEnum.ChangePassword]: ChangePasswordModal,
  [ModalViewEnum.ChangeAddress]: ChangeAddressModal,
  [ModalViewEnum.ChangePhone]: ChangePhoneInputModal,
  [ModalViewEnum.ChangeCountry]: ChangeCountryModal,
  [ModalViewEnum.ChangeFullName]: ChangeFullNameModal,
};
const defaultOptions: ModalOptions = {backdropOpacity: 0.6};

const modalStack = createModalStack(modalConfig, defaultOptions);
export {modalStack};
