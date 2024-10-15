// https://github.com/APSL/react-native-keyboard-aware-scroll-view
// https://stackoverflow.com/questions/72300441/keyboardawarescrollview-props-innerref-scrolltoend-not-working
// https://github.com/facebook/react-native/issues/24531
import React, {Ref, forwardRef, useImperativeHandle, useRef} from 'react';
import {memo} from 'react';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-controller';
import {
  RefreshControlProps,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  ViewStyle,
} from 'react-native';

export interface WScrollViewRef {
  scrollViewCurrentRef: any;
  keyboardAwareScrollCurrentRef: any;
}

export interface WScrollViewProps extends ScrollViewProps {
  children: React.ReactNode;
  disableKeyboardAware?: boolean;
  extraHeight?: number;
  refreshControl?: React.ReactElement<RefreshControlProps> | undefined;
  contentContainerKASVStyle?: StyleProp<ViewStyle>;
}
const WScrollView = forwardRef(
  (
    {
      children,
      disableKeyboardAware = false,
      refreshControl,
      contentContainerKASVStyle,
      ...props
    }: WScrollViewProps,
    ref: Ref<WScrollViewRef>,
  ) => {
    const scrollRef = useRef<any>(null);
    const keyboardAwareScrollRef = useRef<any>(null);

    useImperativeHandle(ref, () => ({
      scrollViewCurrentRef: scrollRef.current,
      keyboardAwareScrollCurrentRef: keyboardAwareScrollRef.current,
    }));

    if (disableKeyboardAware) {
      return (
        <ScrollView
          {...props}
          refreshControl={refreshControl}
          ref={scrollRef}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      );
    }
    return (
      <KeyboardAwareScrollView
        //extraKeyboardSpace={extraHeight ?? Input.HEIGHT * 4.5}
        bottomOffset={15}
        showsVerticalScrollIndicator={
          props.showsVerticalScrollIndicator ?? false
        }
        keyboardShouldPersistTaps="handled"
        refreshControl={refreshControl}
        ref={keyboardAwareScrollRef}
        contentContainerStyle={contentContainerKASVStyle}
      >
        {children}
      </KeyboardAwareScrollView>
    );
  },
);

export default memo(WScrollView);
