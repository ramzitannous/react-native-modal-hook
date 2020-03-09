import React from 'react';

export interface ContextType {
  visible: boolean;

  show: (title: string) => void;

  hide: () => void;

  title: string;

  Content: React.FunctionComponent;

  updateContent: (newContent: React.FunctionComponent) => void;
}
