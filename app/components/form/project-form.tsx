"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CreateProject, UpdateProject } from "@/actions/project";
import { Area, Project } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { projectSchema } from "@/lib/zod-schema";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export default function ProjectForm({
  project,
  areaCbo,
}: {
  project?: Project;
  areaCbo: Area[];
}) {
  // check if project is being passed down to update, else create new one on db
  const formAction = project ? UpdateProject : CreateProject;
  const formTitle = project ? "Update Project" : "Create Project";

  // form definition
  const form = useForm<z.infer<typeof projectSchema>>({
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
  const handleSubmit = async (data: z.infer<typeof projectSchema>) => {
    // server action to create or update
    const result = await formAction(data);

    // show toast of server returned result, reset form if successful
    if (result?.success) {
      toast.success(result.success);
      form.reset();
    } else if (result?.error) {
      toast.error(result.error);
    }
  };

  return (
    <Card className="mx-auto max-w-xl">
      <CardHeader>
        <CardTitle>{formTitle}</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, ut.
        </CardDescription>
      </CardHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <CardContent className="grid gap-3">
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
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>URL</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
          </CardContent>

          <CardFooter>
            <Button type="submit">Save</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
