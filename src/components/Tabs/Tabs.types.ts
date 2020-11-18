import { CSSProperties, ReactElement } from 'react';

export interface TabProps {
  label?: string;
  labelStyle?: CSSProperties;
  selectedColor?: string;
  content?: ReactElement;
}

export interface TabsProps {
  tabs: TabProps[];
  onSelect?: (index: number) => void;
  selected?: number;
  defaultTabIndex?: number;
}

export interface TabsControlledProps {
  tabs: TabProps[];
  onSelect: (index: number) => void;
  selected: number;
  customClassName?: string;
}
