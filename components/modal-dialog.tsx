"use client";

import { useRouter } from "next/navigation";
import { Dialog, DialogContent } from "@components/ui/dialog";

export default function ModalDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
