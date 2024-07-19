import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  backgroundColor?: string;
};

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  return <View style={style} {...otherProps} />;
}
