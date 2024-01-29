"use client";

import { useRouter } from "next/navigation";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
  };

  const handleAnimationEnd = () => {
    // when the modal animation ends:
    // if it's closed, navigate back
    if (!open) {
      router.back();
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent
        onAnimationEndCapture={handleAnimationEnd}
        side="bottom"
        className="h-full overflow-auto rounded-t-xl py-8 md:h-[95%]"
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
