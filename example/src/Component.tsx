import { Button, View } from 'react-native';
import * as React from 'react';
import { useModal } from '../../src/context';

export function TestComponent() {
  const { show } = useModal(null);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={() => show('hello')} title={'Open Modal'} />
    </View>
  );
}
