import { TextInput, TextInputProps } from 'react-native';

export type ThemedTextProps = TextInputProps

export function ThemedText({
  ...rest
}: ThemedTextProps) {

  return (
    <TextInput
      {...rest}
    />
  );
}

