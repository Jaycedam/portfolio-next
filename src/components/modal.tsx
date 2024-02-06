"use client";

import { useRouter } from "next/navigation";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useState } from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  function handleClose() {
    setOpen(false);
  }

  function handleAnimationEnd() {
    // when the modal animation ends:
    // if it's closed, navigate back
    if (!open) {
      router.back();
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleClose}>
      <SheetContent
        onAnimationEndCapture={handleAnimationEnd}
        side="bottom"
        className="h-full overflow-auto rounded-t-xl px-0 py-8 md:h-[96%]"
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
