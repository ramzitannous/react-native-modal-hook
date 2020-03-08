export interface ContextType {
  visible: boolean;

  show: (title: string) => void;

  hide: () => void;

  title: string;
}
