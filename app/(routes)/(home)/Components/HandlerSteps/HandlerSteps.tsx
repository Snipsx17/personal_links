import { useState } from "react";
import { HandlerStepsProps } from "./HandlerSteps.type";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useStepConfig } from "@/hooks";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { StepOne } from "../StepOne";

export const HandlerSteps = (props: HandlerStepsProps) => {
  const { onReload } = props;
  const [openDialog, setOpenDialog] = useState(true);
  const { totalSteps, step, setStep, nextStep, prevStep } = useStepConfig();

  const progressValue = (step / totalSteps) * 100;

  const onCloseDialog = () => {
    onReload(true);
    setOpenDialog(false);
  };

  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogTrigger>Open</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="mb-3">
            {step > 1 && step < 5 && (
              <Button variant={"outline"} className="mr-2" onClick={prevStep}>
                Back <ArrowLeft />
              </Button>
            )}
            <div className="mb-2 text-center">
              step {step} of {totalSteps}
            </div>
            <Progress value={progressValue} />
          </AlertDialogTitle>
          <AlertDialogDescription asChild>
            <div>
              {step === 1 && <StepOne />}
              {step === 2 && "Step 2"}
              {step === 3 && "Step 3"}
              {step === 4 && "Step 4"}
              {step === 5 && "Step 5"}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};
