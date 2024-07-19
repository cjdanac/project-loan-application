import { View } from "react-native";
import React from "react";
import { Dropdown } from "react-native-element-dropdown";
import { ComponentStyles } from "../assets/styles/ComponentStyles";
import { Color, MainLayoutGradient } from "../assets/styles/GlobalStyles";
// import ChevronDown from '../assets/images/Icons/chevron-down-gray.svg'
import { ThemedLabel } from "./ThemedLabel";

export type ThemedDropdownProps = {
  data: any;
  value?: any;
  placeholder?: string;
  labelField: string;
  valueField: string;
  onChange: (item: any) => void;
  disable?: boolean;
  errorMessage?: string;
};

const ThemedDropdown = ({
  data,
  disable,
  onChange,
  valueField,
  labelField,
  value,
}: ThemedDropdownProps) => {
  return (
    <Dropdown
      style={[
        ComponentStyles.formDropDownStyle,
        { backgroundColor: disable ? Color.secondary : Color.white },
      ]}
      placeholderStyle={{
        color: Color.gray400,
      }}
      selectedTextStyle={ComponentStyles.formDropDownSelectedStyle}
      data={data}
      disable={disable}
      maxHeight={300}
      value={value}
      onChange={onChange}
      renderItem={(item: any) => {
        return (
          <View style={ComponentStyles.formDropdownList}>
            <ThemedLabel
              label={item[labelField]?.toString()}
              style={ComponentStyles.formDropDownSelectedStyle}
            />
          </View>
        );
        //     <LinearGradient colors={Color.whiteGradient} style={ScreenStyles.defaultFlexLayout} start={MainLayoutGradient.start} end={MainLayoutGradient.end}>
        // </LinearGradient>
      }}
      renderRightIcon={() => <View>{/* <ChevronDown /> */}</View>}
      labelField={labelField}
      valueField={valueField}
    />
  );
};

export default ThemedDropdown;
