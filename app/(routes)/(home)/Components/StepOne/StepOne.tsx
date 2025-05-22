import { useStepConfig } from "@/hooks";
import { dataCreator } from "./StepOne.data";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const StepOne = () => {
  const { setInfoUser, nextStep } = useStepConfig();
  const [selected, setSelected] = useState<string>("");

  const handleClick = (value: string) => {
    setInfoUser((prevInfoUser) => ({
      ...prevInfoUser,
      typeUser: value,
    }));

    setSelected(value);
  };

  return (
    <div>
      <h2 className="text-center font-semibold text-2xl">
        Tell us more about yourself
      </h2>
      <p className="text-center">This help us personalize your experience</p>

      <div className="grid grid-cols-1 gap-2 mt-4">
        {dataCreator.map((data) => (
          <div
            key={data.title}
            className={`flex flex-col items-center rounded-full border py-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer ${
              selected === data.value && "bg-gray-200"
            }`}
            onClick={() => handleClick(data.value)}
          >
            {data.title}
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button
          className="w-full bg-purple-600 cursor-pointer"
          onClick={nextStep}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
