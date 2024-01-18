"use client";

import { useRouter } from "next/navigation";
import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { IoClose } from "react-icons/io5";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const handleClose = () => router.back();

  return (
    <Drawer shouldScaleBackground open={true} onClose={handleClose}>
      <DrawerContent
        onPointerDownOutside={handleClose}
        onEscapeKeyDown={handleClose}
        className="h-[90%] focus:outline-none md:h-[95%]"
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

        <div className="w-full overflow-auto px-4 py-8">{children}</div>
      </DrawerContent>
    </Drawer>
  );
}
