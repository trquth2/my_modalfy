import {TouchableOpacity} from 'react-native';
import React, {FC, ReactElement, memo, useCallback, useState} from 'react';
import Tooltip from 'react-native-walkthrough-tooltip';

interface Props {
  content: ReactElement;
}

export const TooltipWrapper: FC<Props> = memo(({content, children}) => {
  const [visible, setVisible] = useState(false);

  const onPressTooltip = useCallback(
    (show: boolean) => () => {
      setVisible(show);
    },
    [],
  );
  return (
    <Tooltip
      isVisible={visible}
      content={content}
      placement="top"
      onClose={onPressTooltip(false)}
    >
      <TouchableOpacity activeOpacity={1} onPress={onPressTooltip(true)}>
        {children}
      </TouchableOpacity>
    </Tooltip>
  );
});
