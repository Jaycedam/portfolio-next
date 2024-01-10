import { DeleteProject } from "@/actions/project";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/alert-dialog";
import { FaTrash } from "react-icons/fa";
import { DeleteProjectArea } from "@/actions/project-area";
import { DeleteCarreer } from "@/actions/carreer";
import { DeleteCarreerType } from "@/actions/carreer-type";

interface Props {
  id: number;
  action: "project" | "projectArea" | "carreer" | "carreerType";
}

export default function DeleteFormButton(props: Props) {
  let action;
  // check for selected option to delete from x table
  switch (props.action) {
    case "project":
      action = DeleteProject;
      break;
    case "projectArea":
      action = DeleteProjectArea;
      break;
    case "carreer":
      action = DeleteCarreer;
      break;
    case "carreerType":
      action = DeleteCarreerType;
      break;
    default:
      console.log("Unknown action");
      break;
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" variant="destructive">
          <FaTrash className="h-4 w-auto" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction asChild>
            <form action={action}>
              <input type="hidden" readOnly name="id" defaultValue={props.id} />
              <button type="submit">Delete</button>
            </form>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
