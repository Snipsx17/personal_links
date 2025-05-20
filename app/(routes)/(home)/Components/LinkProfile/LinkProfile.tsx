"use client";

import { Button } from "@/components/ui/button";
import { BookCopy } from "lucide-react";
import { useState } from "react";

export const LinkProfile = () => {
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);

  const copyLink = () => {
    const profileUrl = `${window.location.origin}/@snipsx17`;
    navigator.clipboard.writeText(profileUrl);

    setIsLinkCopied(true);
  };
  return (
    <div className="bg-indigo-100 rounded-3xl">
      <div className="flex flex-col justify-center text-center p-4 items-center gap-2 md:flex-row md:justify-between md:text-left">
        <span className="text-sm">
          <span>🔥 Your Personal Link is Live:</span>
          {window.location.origin}@snipsx17
        </span>
        <Button
          variant="outline"
          className="rounded-full px-4 bg-white text-sm md:text-[16px]"
          onClick={copyLink}
        >
          {isLinkCopied ? (
            "Copied!"
          ) : (
            <>
              <BookCopy /> <span>Copy your Personal Link</span>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};
