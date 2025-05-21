import { LoaderCircle } from "lucide-react";

export const LoaderProfile = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <LoaderCircle className="animate-spin w-10 h-10" />
      <p>Loading Personal Link...</p>
    </div>
  );
};
