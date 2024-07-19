import React, { useState } from 'react';
import { View, Text, Button,  } from 'react-native';
import { ScreenStyles } from '../assets/styles/ScreenStyles';
import { ThemedLabel } from './ThemedLabel';


import { DefaultValues } from '@/constants/DefaultValues';
import { ThemedText } from './ThemedText';

type LoanFormProps = {
    navigation?: any;
    string?: any;
  };

  const LoanForm = ({navigation}: LoanFormProps) => {
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [rate, setRate] = useState('');

  const handleSubmit = () => {
    
  };

  return (
    <View style={ScreenStyles.container}>
      <ThemedLabel label={DefaultValues.LOAN_AMOUNT}/>
      <ThemedText
        style={ScreenStyles.input}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <ThemedLabel label={DefaultValues.TERM_MONTHS}/>
      <ThemedText
        style={ScreenStyles.input}
        keyboardType="numeric"
        value={term}
        onChangeText={setTerm}
      /> 
      <ThemedLabel label={DefaultValues.INTEREST_RATE}/>
      <ThemedText
        style={ScreenStyles.input}
        keyboardType="numeric"
        value={rate}
        onChangeText={setRate}
      />
      <Button title="Calculate" onPress={handleSubmit} />
    </View>
  );
};


export default LoanForm;
