import { ModalContextProvider } from './context';
import React from 'react';
import { ContextType } from './types';

interface ModalProviderProps {
  RootComponent: React.ReactNode;
}

export const ModalProvider = ({ RootComponent }: ModalProviderProps) => {
  const [contextState, setContextState] = React.useState<ContextType>({
    visible: false,
    show: title =>
      setContextState((prevState: ContextType) => ({
        ...prevState,
        title,
        visible: true,
      })),
    hide: () =>
      setContextState((prevState: ContextType) => ({
        ...prevState,
        title: '',
        visible: false,
      })),
    title: '',
  });

  return <ModalContextProvider value={contextState}>{}</ModalContextProvider>;
};
