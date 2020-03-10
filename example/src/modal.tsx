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
