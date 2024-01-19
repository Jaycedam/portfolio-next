"use client";

import { DeleteProject } from "@actions/project";
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
import { FaTrash } from "react-icons/fa";
import { DeleteProjectArea } from "@actions/project-area";
import { DeleteCarreer } from "@actions/carreer";
import { DeleteCarreerType } from "@actions/carreer-type";
import { toast } from "sonner";

export interface DeleteFormProps {
  id: number;
  action: "project" | "project-area" | "carreer" | "carreer-type";
}

export default function DeleteFormButton(props: DeleteFormProps) {
  let action: any;
  // check for selected option to delete from x table
  switch (props.action) {
    case "project":
      action = DeleteProject;
      break;
    case "project-area":
      action = DeleteProjectArea;
      break;
    case "carreer":
      action = DeleteCarreer;
      break;
    case "carreer-type":
      action = DeleteCarreerType;
      break;
  }

  const handleSubmit = async (formData: FormData) => {
    const result = await action(formData);

    if (result?.success) {
      toast.success(result.message);
    } else if (!result?.success) {
      toast.error(result.message);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <FaTrash className="h-4 w-auto" />
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
          <AlertDialogAction asChild>
            <form action={handleSubmit}>
              <input type="hidden" readOnly name="id" defaultValue={props.id} />
              <button type="submit">Delete</button>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
