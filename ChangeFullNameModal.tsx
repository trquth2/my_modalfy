import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet} from 'react-native';
import {ExtendTheme, useTheme} from '@react-navigation/native';
import {showMessage, SizeBox, WTextInput} from '~/shared/components';
import {useAuth, useLoading, useShowModal} from '~/hooks';
import {Images} from '~/themes';
import {RequestUpdateProfile} from '~/models';
import {invalidFirstName, invalidLastName} from '~/utils/UtilValidate';
import {ModalComponentProp} from 'react-native-modalfy';
import {ModalStackParams, ModalViewEnum} from '~/ModalConfig';
import {WAppContentModal} from '../../common';
import {WrapperBody} from './WrapperBody';

type Props = ModalComponentProp<
  ModalStackParams,
  void,
  ModalViewEnum.ChangeFullName
>;
enum ChangeFullNameFieldsEnum {
  firstName = 'firstName',
  lastName = 'lastName',
}
export const ChangeFullNameModal: React.FC<Props> = ({modal: {params}}) => {
  const {t} = useTranslation();
  const theme = useTheme();
  const styles = useMemo(() => {
    return createStyles(theme);
  }, [theme]);
  const userProfile = params?.userProfile;
  const {updateProfile} = useAuth();
  const {showAppLoading} = useLoading();
  const {closeAllAppModals} = useShowModal();
  const [data, setData] = useState({
    [ChangeFullNameFieldsEnum.firstName]: '',
    [ChangeFullNameFieldsEnum.lastName]: '',
  });

  useEffect(() => {
    if (userProfile) {
      setData((prev) => {
        return {
          ...prev,
          [ChangeFullNameFieldsEnum.firstName]:
            userProfile?.profile?.fistname ?? '',
          [ChangeFullNameFieldsEnum.lastName]:
            userProfile?.profile?.lastname ?? '',
        };
      });
    }
  }, [userProfile]);

  const onChangeField = useCallback(
    (field: ChangeFullNameFieldsEnum) => (value: string) => {
      setData((prev) => {
        return {...prev, [field]: value};
      });
    },
    [],
  );

  const onDone = useCallback(async () => {
    try {
      const fName = data[ChangeFullNameFieldsEnum.firstName];
      const lName = data[ChangeFullNameFieldsEnum.lastName];
      let key = invalidFirstName(fName);
      if (key) {
        showMessage(t(key));
        return null;
      }
      key = invalidLastName(lName);
      if (key) {
        showMessage(t(key));
        return null;
      }
      showAppLoading(true);

      const body: RequestUpdateProfile = {
        fistname: data[ChangeFullNameFieldsEnum.firstName],
        lastname: data[ChangeFullNameFieldsEnum.lastName],
      };
      await updateProfile(body);
      closeAllAppModals();
    } catch (error) {
      showAppLoading(false);
    }
  }, [data, showAppLoading, closeAllAppModals]);

  return (
    <WAppContentModal title="Change FullName">
      <WrapperBody onDoneAction={onDone}>
        <WTextInput
          value={data[ChangeFullNameFieldsEnum.firstName]}
          sourceIconLeft={Images.userIco}
          valuePlaceholder={'First Name'}
          actionChangeText={onChangeField(ChangeFullNameFieldsEnum.firstName)}
        />
        <SizeBox height={16} />
        <WTextInput
          value={data[ChangeFullNameFieldsEnum.lastName]}
          sourceIconLeft={Images.userIco}
          valuePlaceholder={'Last Name'}
          actionChangeText={onChangeField(ChangeFullNameFieldsEnum.lastName)}
        />
      </WrapperBody>
    </WAppContentModal>
  );
};

const createStyles = (_theme: ExtendTheme) =>
  StyleSheet.create({
    container: {flexDirection: 'row', justifyContent: 'space-evenly'},
    footer: {flexDirection: 'row', alignSelf: 'center'},
  });
