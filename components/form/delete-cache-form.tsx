"use client";

import { revalidateAll } from "@/actions/admin";
import { buttonVariants } from "@components/ui/button";
import { toast } from "sonner";

const handleSubtmit = async () => {
  const result = await revalidateAll();

  if (result.success) {
    toast.success(result.message);
    return;
  }
  toast.error(result.message);
};

const DeleteCacheForm = () => {
  return (
    <form action={handleSubtmit}>
      <button className={buttonVariants({})} type="submit">
        Borrar Cache
      </button>
    </form>
  );
};

export default DeleteCacheForm;
