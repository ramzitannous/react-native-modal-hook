import * as React from 'react';
import { TestComponent } from './Component';
import { ModalProvider } from '../../src/component';
import { Modal } from 'react-native';
import { ThemeProvider, DefaultTheme } from 'react-native-paper';

export default function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <ModalProvider ModalComponent={Modal}>
        <TestComponent />
      </ModalProvider>
    </ThemeProvider>
  );
}
