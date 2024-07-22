import { View, Modal, Alert } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { ComponentStyles } from "../assets/styles/ComponentStyles";
import { ThemedLabel } from "./ThemedLabel";
import { ThemedView } from "./ThemedView";
import { ThemedButton } from "./ThemedButton";
import { DefaultValues } from "@/constants/DefaultValues";
import Close from "../assets/icons/close-gray.svg"
import { loan, LoanModel } from "project-loanapp";


type ProceedModalProps = {
  question: string;
  modalVisible?: boolean;
  onClose: () => void;
  handleYes: () => void;
  visible?: boolean;
  amount?: number;
  loanTerm?: number;
  monthlyPayment?: number;
  paymentDates?: Date;
};

const ProceedModal = ({
  question,
  visible,
  modalVisible,
  onClose,
  loanTerm,
  monthlyPayment,
   amount,
   handleYes

}: ProceedModalProps) => {
  const handleYesClick = async () => {
    const formModel = new LoanModel({
      payload: {
        loanAmount: amount,
        interestPerMonth: 1.5,
        loanTerm,
        monthlyPayment,
      },
    });
    const response = await loan(formModel);
    console.log(response)
    if (response) {
      Alert.alert("Success");
      handleYes();
    }
  };
  return (
    <View>
      <Modal
        animationType="none"
        visible={visible}
        statusBarTranslucent={true}
        onRequestClose={onClose}
        transparent={true}
      >
        <View style={ComponentStyles.promptModalBackground}>
          <View style={ComponentStyles.promptModalContainer}>
            <ThemedView style={ComponentStyles.promptRightAligner}>
              <TouchableOpacity
                onPress={() => {
                  onClose();
                }}
              >
                <ThemedView style={ComponentStyles.promptCloseButton}>
                  <Close />
                </ThemedView>
              </TouchableOpacity>
            </ThemedView>

            <ThemedLabel
              label={question}
              style={ComponentStyles.promptLabel}
              numberOfLines={2}
            />

            <ThemedView style={ComponentStyles.promptRightAligner}>
              <ThemedView style={ComponentStyles.promptButtonContainer}>
                <ThemedButton
                  title={DefaultValues.YES}
                  textStyle={ComponentStyles.promptYesButtonLabel}
                  buttonStyle={ComponentStyles.promptYesButton}
                  onPress={() => {
                    handleYesClick();
                    onClose();
                  }}
                />
                <ThemedButton
                  title={DefaultValues.NO}
                  textStyle={ComponentStyles.promptNoButtonLabel}
                  buttonStyle={ComponentStyles.promptNoButton}
                  onPress={() => {
                    onClose();
                  }}
                />
              </ThemedView>
            </ThemedView>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProceedModal;
