"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Drawer shouldScaleBackground open={true} onClose={handleClose}>
      <DrawerContent
        onPointerDownOutside={handleClose}
        onEscapeKeyDown={handleClose}
        className="h-[93vh]"
      >
        <DrawerClose
          className="absolute right-4 top-4 z-50 hidden md:block"
          onClick={handleClose}
          asChild
        >
          <Button className="h-6 w-6 rounded-full" size="icon">
            <IoClose className="mx-auto h-6 w-auto" />
          </Button>
        </DrawerClose>
        <div className="h-full w-full overflow-auto">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
