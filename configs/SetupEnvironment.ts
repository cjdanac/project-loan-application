import { Environment, EnvProps } from "project-loanapp";

const SetupEnvironment: EnvProps = {
  API_URL: process.env.EXPO_PUBLIC_BASE_URL,
  LOAN: process.env.EXPO_PUBLIC_LOAN
 
};

export default async function initEnvironment() {
  Environment.init(SetupEnvironment);
}
