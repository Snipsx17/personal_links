import { TreePalm } from "lucide-react";
import { LinkProfile } from "./Components";

export default function HomePage() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-4 px-4">
        {/* Link profile */}
        <div>
          <LinkProfile />

          <div>
            <p>Profile info...</p>
          </div>
          <div className="mt-20 text-center flex flex-col items-center">
            <div className="py-10 text-center justify-center flex flex-col items-center text-gray-400 font-semibold">
              <TreePalm className="h-20 w-20" strokeWidth={1} />
              <p>Show the world who you are.</p>
              <p>Add a link to get started.</p>
            </div>
          </div>
        </div>
        {/* Profile preview */}
        <div>
          <p>Profile preview...</p>
        </div>
      </div>
    </div>
  );
}
