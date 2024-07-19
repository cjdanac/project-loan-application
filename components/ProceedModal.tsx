import { View, Modal } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ComponentStyles } from "../assets/styles/ComponentStyles";
import { ThemedLabel } from "./ThemedLabel";
import { ThemedView } from "./ThemedView";
import { ThemedButton } from "./ThemedButton";
import { DefaultValues } from "@/constants/DefaultValues";
import Close from "../assets/";
type ProductModalProps = {
  question: string;
  modalVisible?: boolean;
  onClose?: () => void;
  handleYes?: () => void;
};

const ProceedModal = ({
  question,
  modalVisible,
  onClose,
  handleYes,
}: ProductModalProps) => {
  return (
    <View>
      <Modal
        animationType="none"
        visible={modalVisible}
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
                    handleYes();
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
