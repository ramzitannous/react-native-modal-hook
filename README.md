
# react-native-modal-hook

React Native Model hook &amp; provider

## Installation

```sh
npm install react-native-modal-hook
```

## Usage

App.tsx
```js
import { ModalProvider } from 'react-native-modal-hook';

export default function App() {
  return (
    <ModalProvider>
      <RootModal />
    </ModalProvider>
  );
}
```

RootModal.tsx
```js
import { Modal, Text } from 'react-native';
import React, { Fragment } from 'react';
import { useModal } from 'react-native-modal-hook';

export function RootModal() {
  const { visible, Content, hide, title } = useModal();

  return (
    <Fragment>
      {visible && (
        <Modal
          visible={visible}
          onDismiss={hide}
          animated={true}
          presentationStyle={'pageSheet'}
        >
          <Text>{title}</Text>
          <Content />
        </Modal>
      )}
    </Fragment>
  );
}
```

OtherComponents:
```js
import { Button, Text, View } from 'react-native';  
import * as React from 'react';  
import { useModal } from 'react-native-modal-hook';  
  
export function TestComponent() {  
  const { show } = useModal(() => {  
    return <Text>{'Hello'}</Text>;  
  });  
  
 return (  
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>  
	 <Button onPress={() => show('hello')} title={'Open Modal'} />  
 </View>  );  
}
```
check examples folder for code sample


## License

MIT
