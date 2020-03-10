import { ModalContextProvider } from './context';
import React from 'react';
import { ContextType } from './types';

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
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

  return (
    <ModalContextProvider value={contextState}>{children}</ModalContextProvider>
  );
};
