"use client";

import { useRouter } from "next/navigation";

import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Sheet open={true} onOpenChange={handleClose}>
      <SheetContent
        side="bottom"
        className="h-[90%] overflow-auto py-16 md:h-[95%]"
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
