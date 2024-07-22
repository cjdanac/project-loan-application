import React, { useState } from 'react';
import { View, Text, Button, ScrollView,  } from 'react-native';
import { ScreenStyles } from '../assets/styles/ScreenStyles';
import { ThemedLabel } from './ThemedLabel';
import { DefaultValues } from '@/constants/DefaultValues';
import { ThemedText } from './ThemedText';
import ProceedModal from './ProceedModal';
import { ThemedButton } from './ThemedButton';
import { ComponentStyles } from '@/assets/styles/ComponentStyles';
import ThemedDropdown from './ThemedDropdown';
import { ThemedView } from './ThemedView';
import LoanTable from './LoanTable';
import { Environment, LoanModel } from 'project-loanapp';


type LoanFormProps = {
    navigation?: any;
    string?: any;
  };

  const LoanForm = ({navigation}: LoanFormProps) => {
    const [amount, setAmount] = useState<number>(0);
    const [isVisible, setIsVisible] = useState(false);
    const [selectedTerm, setSelectedTerm] = useState<number>(0);
    const [monthlyPayment, setMonthlyPayment] = useState<number>(0);
    const interestRate = 1.5; 
    const [showTable, setShowTable] = useState(false); 
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    const calculateMonthlyPayment = (amount: number, rate: number, term: number) => {
    
      const interestRate = rate / 100;
  
      if (!amount || !interestRate || !term) {
        return '0';
      }
  
      const monthlyRate = interestRate / 12;
      const monthlyPayment = amount * (monthlyRate / (1 - Math.pow((1 + monthlyRate), -term)));
      console.log("amount: ",amount)
      console.log("monthlyRate: ",monthlyRate)
      console.log("monthlyPayment: ",monthlyPayment)

      return monthlyPayment.toFixed(2);
    };

    
  
    const handleSubmit = () => {
      const payment = calculateMonthlyPayment(amount, interestRate, selectedTerm);
      setMonthlyPayment(Number(payment));
      setIsVisible(true);
      console.log("sss",Environment.API_URL)

    };
    const handleYes = () => {
      setShowTable(true); 
      setIsVisible(false); 
      setIsSubmitDisabled(true);
    };
    const handleNewLoan = () => {
      setAmount(0);
      setSelectedTerm(0);
      setMonthlyPayment(0);
      setShowTable(false);
      setIsSubmitDisabled(false);
    };
  

  return (
    <ScrollView contentContainerStyle={ScreenStyles.scrollViewContainer}>
      <Text style={ScreenStyles.title}>Loan Application</Text>
      <ThemedLabel 
        style = {ScreenStyles.text}
        label={DefaultValues.LOAN_AMOUNT}/>
      <ThemedText
        style={ScreenStyles.input}
        keyboardType="numeric"
        placeholder='0.00'
        onChangeText={(number) => {
          setAmount(Number(number));
        }}
      />
      <ThemedLabel 
        style = {ScreenStyles.text}
        label={DefaultValues.TERM_MONTHS}/>
        <ThemedView style={{height: 50}}>
          <ThemedDropdown
                    data={[
                        { months: "12 Months", value: "12" },
                        { months: "24 Months", value: "24" },
                        { months: "36 Months", value: "36" }
                    ]}
                    labelField='months'
                    valueField='value'
                    value={selectedTerm}
                    onChange={(item) => {
                      console.log('ssss')
                        setSelectedTerm(item.value);
                    }} /> 
          </ThemedView>
      
      <ThemedLabel 
       style={[ScreenStyles.text, { marginTop: 20 }]}
        label={DefaultValues.INTEREST_RATE}/>
      <ThemedText
        style={ScreenStyles.input}
        keyboardType="numeric"
        value={interestRate.toString()}
        editable={false}
      />
       <Text style={ScreenStyles.text}>Monthly Payment: {monthlyPayment}</Text>
      {showTable && monthlyPayment > 0 && (
        <LoanTable term={selectedTerm} monthlyPayment={monthlyPayment} />
      )}
      <ThemedButton
        title={'Submit'}
        textStyle={isSubmitDisabled ? ComponentStyles.proceedButtonLabelDisabled : ComponentStyles.proceedButtonLabel}
        buttonStyle={isSubmitDisabled ? ComponentStyles.proceedButtonDisabled : ComponentStyles.proceedButton}
        onPress={handleSubmit}
        disabled={isSubmitDisabled}
      />
      <ThemedButton
        title={'New Loan'}
        textStyle={ComponentStyles.proceedButtonLabel}
        buttonStyle={[ComponentStyles.proceedButton, { marginTop: 10 }]}
        onPress={handleNewLoan}
      />
      <ProceedModal
        visible={isVisible}
        question={DefaultValues.ARE_YOU_SURE}
        onClose={() => setIsVisible(false)}
        handleYes={handleYes}
        amount={amount}
        loanTerm={selectedTerm}
        monthlyPayment={monthlyPayment}
        
      />
    </ScrollView>
  );
};

export default LoanForm;
