"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Area } from "@prisma/client";
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
import { carreerTypeSchema } from "@/lib/zod-schema";
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
import { CreateCarreerType, UpdateCarreerType } from "@/actions/carreer-type";

export default function CarreerType({ carreerType }: { carreerType?: Area }) {
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
          </CardContent>

          <CardFooter>
            <Button type="submit">Save</Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
