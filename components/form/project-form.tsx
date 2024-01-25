"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { createProject, updateProject } from "@actions/project";
import { Area, Project } from "@prisma/client";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Checkbox } from "@components/ui/checkbox";
import { projectSchema } from "@lib/zod-schema";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { useRouter } from "next/navigation";
import SpinnerSVG from "@components/svg/spinner-svg";
import { ProjectForm } from "@/utils/types";

export default function ProjectForm({
  project,
  areaCbo,
}: {
  project?: Project;
  areaCbo: Area[];
}) {
  const router = useRouter();

  // check if project is being passed down to update, else create new one on db
  const formAction = project ? updateProject : createProject;
  const formTitle = project ? "Update Project" : "Create Project";

  // form definition
  const form = useForm<ProjectForm>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      id: project?.id,
      name: project?.name || "",
      url: project?.url || "",
      imageUrl: project?.imageUrl || "",
      areaId: Number(project?.areaId) || undefined,
      homepage: project?.homepage || false,
    },
  });

  // form on submit
  const handleSubmit = async (data: ProjectForm) => {
    // server action to create or update
    const result = await formAction(data);

    // show toast of server returned result, reset form if successful
    if (result?.success) {
      toast.success(result.message);
      if (project === undefined) {
        form.reset();
        return;
      }
      router.push("/admin/project");
    } else if (!result?.success) {
      toast.error(result.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <h1 className="text-lg font-bold">{formTitle}</h1>
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
        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>MDX URL</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="areaId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Area</FormLabel>
              <Select
                required
                onValueChange={field.onChange}
                defaultValue={field.value?.toString()}
              >
                <FormControl>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                </FormControl>

                <SelectContent>
                  {areaCbo.map((item, index) => (
                    <SelectItem key={index} value={item.id.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="homepage"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="ml-2">See on homepage</FormLabel>

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
