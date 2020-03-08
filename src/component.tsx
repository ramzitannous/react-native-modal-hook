import { ModalContextProvider } from './context';
import React from 'react';
import { ContextType } from './types';
import { Text } from 'react-native';

interface ModalProviderProps {
  RootComponent: React.ElementType<any>;
  children: React.ReactNode;
  rootProps?: any;
}

export const ModalProvider = ({
  RootComponent,
  children,
  rootProps,
}: ModalProviderProps) => {
  const [contextState, setContextState]: [ContextType, any] = React.useState<
    ContextType
  >({
    visible: false,
    show: title =>
      setContextState((prevState: ContextType) => {
        if (!prevState.visible) {
          return {
            ...prevState,
            title,
            visible: true,
          };
        } else {
          return prevState;
        }
      }),
    hide: () =>
      setContextState((prevState: ContextType) => ({
        ...prevState,
        title: '',
        visible: false,
      })),
    title: '',
  });

  return (
    <ModalContextProvider value={contextState}>
      {contextState.visible && (
        <RootComponent
          visible={contextState.visible}
          onDismiss={contextState.hide}
          {...rootProps}
        >
          <Text>{'hello'}</Text>
        </RootComponent>
      )}
      {children}
    </ModalContextProvider>
  );
};
