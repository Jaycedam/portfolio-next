"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Area } from "@prisma/client";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { projectAreaSchema } from "@lib/zod-schema";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { createProjectArea, updateProjectArea } from "@actions/project-area";
import { useRouter } from "next/navigation";
import SpinnerSVG from "@components/svg/spinner-svg";

export default function ProjectAreaForm({
  projectArea,
}: {
  projectArea?: Area;
}) {
  const router = useRouter();

  // check if project is being passed down to update, else create new one on db
  const formAction = projectArea ? updateProjectArea : createProjectArea;
  const formTitle = projectArea ? "Update Project Area" : "Create Project Area";

  // form definition
  const form = useForm<z.infer<typeof projectAreaSchema>>({
    resolver: zodResolver(projectAreaSchema),
    defaultValues: {
      id: projectArea?.id,
      name: projectArea?.name || "",
    },
  });

  // form on submit
  const handleSubmit = async (data: z.infer<typeof projectAreaSchema>) => {
    // server action to create or update
    const result = await formAction(data);

    // show toast of server returned result, reset form if successful
    if (result?.success) {
      toast.success(result.message);
      if (projectArea === undefined) {
        form.reset();
        return;
      }
      router.push("/admin/project-area");
    } else if (!result?.success) {
      toast.error(result.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <header>
          <h1 className="text-lg font-bold">{formTitle}</h1>
        </header>
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input aria-hidden readOnly type="hidden" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="w-20"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          {form.formState.isSubmitting ? <SpinnerSVG size="6" /> : "Save"}
        </Button>
      </form>
    </Form>
  );
}
