import React, { ReactNode } from "react";

export type StepConfigUserContextType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  infoUser: InfoUserType;
  setInfoUser: React.Dispatch<React.SetStateAction<InfoUserType>>;
  totalSteps: number;
  nextStep: () => void;
  prevStep: () => void;
};

type InfoUserType = {
  typeUser: string;
  name: string;
  platforms: IPlatforms[];
  avatarUrl: string;
  userName: string;
};

type IPlatforms = {
  icon: string;
  link: string;
  name: string;
};

export type StepConfigUserProviderProps = {
  children: ReactNode;
};
