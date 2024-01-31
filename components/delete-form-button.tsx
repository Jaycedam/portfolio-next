"use client";

import { Button } from "@components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@components/ui/alert-dialog";
import { deleteCarreer } from "@actions/carreer";
import { deleteCarreerType } from "@actions/carreer-type";
import { toast } from "sonner";
import { TableSelection } from "@/utils/types";
import { Delete } from "lucide-react";

export default function DeleteFormButton({
  id,
  action,
}: {
  id: number;
  action: TableSelection;
}) {
  let deleteAction: any;
  // check for selected option to delete from x table
  switch (action) {
    case "carreer":
      deleteAction = deleteCarreer;
      break;
    case "carreer-type":
      deleteAction = deleteCarreerType;
      break;
  }

  const handleSubmit = async (formData: FormData) => {
    const result = await deleteAction(formData);

    if (result?.success) {
      toast.success(result.message);
    } else if (!result?.success) {
      toast.error(result.message);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="ghost">
          <Delete className="h-6" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete item?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete it from
            the database.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <form action={handleSubmit}>
            <input type="hidden" readOnly name="id" defaultValue={id} />
            <AlertDialogAction asChild>
              <button className="h-full w-full" type="submit">
                Delete
              </button>
            </AlertDialogAction>
          </form>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
