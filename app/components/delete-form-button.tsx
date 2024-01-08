import { DeleteProject } from "@/utils/actions";
import React from "react";
import { Button } from "@/components/ui/button";

// add all delete actions from utils/actions
// add interface to check what table is selected to delete entry

export default function DeleteFormButton(props: { id: number }) {
  // add check for selected option to delete based on interface
  return (
    <form action={DeleteProject}>
      <input type="hidden" readOnly name="id" defaultValue={props.id} />
      <Button variant="destructive" type="submit">
        Delete
      </Button>
    </form>
  );
}
