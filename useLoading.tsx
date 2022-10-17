import {useState} from 'react';
import {useModal} from 'react-native-modalfy';
import {ModalViewEnum} from '~/ModalConfig';
import {useStoreActions, useStoreState} from '~/store';

export const useLoading = () => {
  const {setGlobalLoading} = useStoreActions((state) => state.common);
  const {isGlobalLoading} = useStoreState((state) => state.common);
  const {openModal, closeModal} = useModal();
  const [isLoading, setIsLoading] = useState(false);

  const showLoading = (isShow: boolean) => {
    setIsLoading(isShow);
  };
  //https://github.com/react-native-modal/react-native-modal/issues/192
  const showGlobalLoading = (payload: boolean) => {
    //https://github.com/react-native-modal/react-native-modal/issues/192
    if (payload) {
      setTimeout(() => {
        setGlobalLoading(true);
      }, 500);
    } else {
      setTimeout(() => {
        setGlobalLoading(false);
      }, 200);
    }
  };

  const showAppLoading = (isShow: boolean) => {
    if (isShow) {
      openModal(ModalViewEnum.Loading);
    } else {
      closeModal(ModalViewEnum.Loading);
    }
  };

  return {
    isGlobalLoading,
    isLoading,
    showGlobalLoading,
    showLoading,
    showAppLoading,
  };
};
