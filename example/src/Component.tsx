import { Button, Text, View, ViewStyle } from 'react-native';
import * as React from 'react';
import { useModal } from 'react-native-modal-hook';

const containerStyle: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export function TestComponent() {
  const { show } = useModal(() => {
    return <Text>{'Hello'}</Text>;
  });

  return (
    <View style={containerStyle}>
      <Button onPress={() => show('hello')} title={'Open Modal'} />
    </View>
  );
}
