import { ThemedView } from '@/components/ThemedView';
import { ScreenStyles } from '@/assets/styles/ScreenStyles';
import LoanForm from '@/components/LoanForm';

export default function HomeScreen() {
  return (

      <ThemedView style={ScreenStyles.titleContainer}>
       <LoanForm />
      </ThemedView>

  );
}

