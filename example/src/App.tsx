import * as React from 'react';
import { TestComponent } from './Component';
import { RootModal } from './modal';
import { ModalProvider } from 'react-native-modal-hook';

export default function App() {
  return (
    <ModalProvider>
      <TestComponent />
      <RootModal />
    </ModalProvider>
  );
}
