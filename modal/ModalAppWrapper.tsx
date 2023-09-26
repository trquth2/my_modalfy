import React, {forwardRef, Ref, useCallback, useImperativeHandle} from 'react';
import {BaseModalContentWrapperProps, WBaseModal} from '~/shared/components';
import {useShowModal} from '~/hooks';

interface Props extends BaseModalContentWrapperProps {}

export interface ModelAppWrapperRefObject {
  showAppModal: (isShow: boolean) => void;
}
export const ModalAppWrapper = forwardRef(
  ({children, ...props}: Props, ref: Ref<ModelAppWrapperRefObject>) => {
    const {isShow, showModal} = useShowModal();

    const onShow = useCallback(
      (isShow: boolean) => () => {
        showModal(isShow);
      },
      [],
    );

    useImperativeHandle(ref, () => ({
      showAppModal: (isShow: boolean) => {
        onShow(isShow)();
      },
    }));

    return (
      <WBaseModal {...props} isVisible={isShow}>
        {children}
      </WBaseModal>
    );
  },
);
