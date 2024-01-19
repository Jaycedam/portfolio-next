"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Area } from "@prisma/client";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import { carreerTypeSchema } from "@lib/zod-schema";
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
import { CreateCarreerType, UpdateCarreerType } from "@actions/carreer-type";
import { useRouter } from "next/navigation";

export default function CarreerTypeForm({
  carreerType,
}: {
  carreerType?: Area;
}) {
  const router = useRouter();

  // check if project is being passed down to update, else create new one on db
  const formAction = carreerType ? UpdateCarreerType : CreateCarreerType;
  const formTitle = carreerType ? "Update Carreer Type" : "Create Carreer Type";

  // form definition
  const form = useForm<z.infer<typeof carreerTypeSchema>>({
    resolver: zodResolver(carreerTypeSchema),
    defaultValues: {
      id: carreerType?.id,
      name: carreerType?.name || "",
    },
  });

  // form on submit
  const handleSubmit = async (data: z.infer<typeof carreerTypeSchema>) => {
    // server action to create or update
    const result = await formAction(data);

    // show toast of server returned result, reset form if successful
    if (result?.success) {
      toast.success(result.success);
      if (carreerType === undefined) {
        form.reset();
      }
      router.back();
    } else if (result?.error) {
      toast.error(result.error);
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

        <Button type="submit">Save</Button>
      </form>
    </Form>
  );
}
