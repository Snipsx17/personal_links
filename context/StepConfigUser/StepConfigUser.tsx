import { createContext, useState } from "react";
import {
  StepConfigUserContextType,
  StepConfigUserProviderProps,
} from "./StepConfigUser.type";

export const StepConfigUserContext = createContext<StepConfigUserContextType>({
  step: 1,
  setStep: () => {},
  infoUser: {
    typeUser: "",
    name: "",
    platforms: [],
    avatarUrl: "",
    userName: "",
  },
  setInfoUser: () => {},
  totalSteps: 5,
  nextStep: () => {},
  prevStep: () => {},
});

export const StepConfigUserProvider = ({
  children,
}: StepConfigUserProviderProps) => {
  const [step, setStep] = useState(1);
  const [infoUser, setInfoUser] = useState<
    StepConfigUserContextType["infoUser"]
  >({
    typeUser: "",
    name: "",
    platforms: [],
    avatarUrl: "",
    userName: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const totalSteps = 5;

  const data = {
    step,
    setStep,
    infoUser,
    setInfoUser,
    totalSteps,
    nextStep,
    prevStep,
  };

  return (
    <StepConfigUserContext.Provider value={data}>
      {children}
    </StepConfigUserContext.Provider>
  );
};
