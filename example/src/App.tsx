import * as React from 'react';
import { TestComponent } from './Component';
import { ModalProvider } from '../../src/component';
import { Modal } from 'react-native';

export default function App() {
  return (
    <ModalProvider RootComponent={Modal}>
      <TestComponent />
    </ModalProvider>
  );
}
