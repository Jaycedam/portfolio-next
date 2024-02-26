"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent, DialogHeader } from "@components/ui/dialog";
import { useState } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function ModalDialog({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);

  const router = useRouter();

  const handleClose = () => setOpen(false);

  function handleAnimationEnd() {
    // when the modal animation ends:
    // if it's closed, navigate back
    if (!open) {
      router.back();
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent onAnimationEndCapture={handleAnimationEnd}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
