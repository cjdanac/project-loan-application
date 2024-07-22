import { StyleSheet } from "react-native";
import {
  Align,
  BodyFontRegular,
  Color,
  FontFamily,
  HeadingFont,
} from "./GlobalStyles";

export const ScreenStyles = StyleSheet.create({
  container1: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  scrollViewContainer:{
    padding: 20, 
    flexGrow: 1,
  }
  ,
  table1:{
 width: '50%', 
 textAlign: 'right', 
 marginLeft: 5
  },
  header1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  container3: {
    padding: 20,
  },
  text:{
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom:10
  },
  title: {
    paddingTop: 24,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
},
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    fontSize: 14,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  input2:{
    height: 50, 
    borderRadius: 8,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  defaultFlexLayout: {
    flex: 1,
  },
  defaultFlexLayout2: {
    flex: 2,
  },
  defaultFlexLayout1: {
    flex: 1,
    flexDirection: "row",
  },
  defaultMainLayout: {
    padding: 20,
    flex: 1,
  },
  splashScreenContainer: {
    backgroundColor: Color.secondary,
    color: Color.white,
    flex: 1,
  },
  splashAnimatedLayout: {
    flex: 1,
    justifyContent: Align.center,
    alignItems: Align.center,
  },
  splashTextContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: "center",
    marginBottom: 48,
  },
  splashLabelContainer: {
    ...HeadingFont.heading6,
    color: Color.primary,
  },
  reportTable: {
    flex: 1,
    backgroundColor: Color.white,
    margin: 20,
    borderRadius: 12,
    flexDirection: "column",
  },
  baReportTable1: {
    flex: 1,
    backgroundColor: Color.white,
    borderRadius: 12,
    flexDirection: "column",
  },
  baReportTable2: {
    flex: 1,
    backgroundColor: Color.gray100,
    borderRadius: 12,
    flexDirection: "column",
  },
  headerContainer: {
    backgroundColor: Color.primary,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    flex: 1,
  },
  cashStatusCollection: {
    flexDirection: "row",
    gap: 16,
  },
  subHeaderContainer: {
    backgroundColor: Color.white,
    overflow: "hidden",
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  reportsSubHeaderContainer: {
    backgroundColor: Color.white,
    overflow: "hidden",
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subHeaderContainerReplenish: {
    backgroundColor: Color.white,
    overflow: "hidden",
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subHeaderContainer1: {
    backgroundColor: Color.gray100,
    overflow: "hidden",
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerContainerSAProduct: {
    height: 88,
    backgroundColor: Color.primary,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: "hidden",
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    flexGrow: 1,
    padding: 20,
    gap: 10,
    borderRadius: 12,
    backgroundColor: "#FBFBFB",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  screenContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f8f9fa",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardContent: {
    fontSize: 16,
  },
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: "bold",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    padding: 10,
  },
  tableCell: {
    flex: 1,
  },
  modalContainer: {},
  fieldContainer: {
    marginBottom: 8,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: 455,
    height: 615,
    gap: 16,
    borderRadius: 8,
    alignItems: "flex-start",
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    elevation: 10,
  },
  modalContentRP: {
    width: 552,
    height: 350,
    borderRadius: 12,
    alignItems: "flex-start",
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    paddingVertical: 24,
    elevation: 10,
  },
  modalContentPRSettings: {
    width: 552,
    height: 227,
    borderRadius: 12,
    alignItems: "flex-start",
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    paddingVertical: 24,
    elevation: 10,
    gap: 28,
  },
  modalUploadGcash: {
    width: 552,
    height: 547,
    borderRadius: 12,
    alignItems: "flex-start",
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    paddingVertical: 24,
    elevation: 10,
    gap: 28,
  },

  modalTitle: {
    fontSize: 14,
    fontWeight: "400",
  },
  rpColumn: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "flex-start",
    gap: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    color: Color.primary,
  },
  modalText: {
    fontSize: 14,
  },
  bold: {
    fontWeight: "bold",
  },
  icon: {
    marginLeft: "auto",
  },

  dashboardLabelEmptyContainer: {
    ...BodyFontRegular.medium,
    color: Color.gray600,
    textAlign: "center",
    fontWeight: "400",
  },

  themedTable: {
    paddingHorizontal: 20,
  },
});
