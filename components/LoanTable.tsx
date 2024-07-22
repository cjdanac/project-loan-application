import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedLabel } from './ThemedLabel';
import { DefaultValues } from '@/constants/DefaultValues';
import { ScreenStyles } from '@/assets/styles/ScreenStyles';

type LoanTableProps = {
  term: number;
  monthlyPayment: number;
};

const getSequentialMonthsWithYears = (startMonth: number, term: number) => {
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const sequentialMonthsWithYears = [];
  const currentYear = new Date().getFullYear();
  for (let i = 0; i < term; i++) {
    const monthIndex = (startMonth + i) % 12;
    const year = currentYear + Math.floor((startMonth + i) / 12);
    sequentialMonthsWithYears.push(`${monthNames[monthIndex]} 20th, ${year}`);
  }
  return sequentialMonthsWithYears;
};

const LoanTable = ({ term, monthlyPayment }: LoanTableProps) => {
  
  const currentMonth = new Date().getMonth(); 
  const sequentialMonthsWithYears = getSequentialMonthsWithYears(currentMonth, term);
  const rows = [];

  for (let i = 0; i < term; i++) {
    rows.push(
      <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
         <ThemedText style={{ width: '50%' }}>{sequentialMonthsWithYears[i]}</ThemedText>
         <ThemedText style={ScreenStyles.table1}>{monthlyPayment}</ThemedText>
      </View>
    );
  }

  return (
    <ScrollView style={{ padding: 10 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Payment Schedule</Text>
      {rows}
    </ScrollView>
  );
};
export default LoanTable;
