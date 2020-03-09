import { ModalContextProvider } from './context';
import React from 'react';
import { ContextType } from './types';

interface ModalProviderProps {
  ModalComponent: React.ElementType;
  children: React.ReactNode;
  modalProps?: any;
}

export const ModalProvider = ({
  ModalComponent,
  children,
  modalProps,
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
    Content: () => null,
    updateContent: newContent => {
      contextState.Content = newContent;
    },
  });
  const { Content } = contextState;

  return (
    <ModalContextProvider value={contextState}>
      {contextState.visible && (
        <ModalComponent
          visible={contextState.visible}
          onDismiss={contextState.hide}
          {...modalProps}
        >
          {Content && <Content />}
        </ModalComponent>
      )}
      {children}
    </ModalContextProvider>
  );
};
