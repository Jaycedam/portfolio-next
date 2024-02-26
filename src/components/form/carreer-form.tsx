"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Carreer, Type } from "@prisma/client";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Textarea } from "@components/ui/textarea";
import { carreerSchema } from "@/utils/zod-schema";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@components/ui/form";
import { createCarreer, updateCarreer } from "@actions/carreer";
import { useRouter } from "next/navigation";
import SpinnerSVG from "@components/svg/spinner-svg";
import { CarreerForm } from "@/utils/types";

export default function CarreerForm({
  carreer,
  typeCbo,
}: {
  carreer?: Carreer;
  typeCbo: Type[];
}) {
  const router = useRouter();

  // check if project is being passed down to update, else create new one on db
  const formAction = carreer ? updateCarreer : createCarreer;

  // form definition
  const form = useForm<CarreerForm>({
    resolver: zodResolver(carreerSchema),
    defaultValues: {
      id: carreer?.id,
      name: carreer?.name || "",
      about: carreer?.about || "",
      company: carreer?.company || "",
      date: carreer?.date || "",
      typeId: Number(carreer?.typeId) || undefined,
    },
  });

  // form on submit
  const handleSubmit = async (data: CarreerForm) => {
    // server action to create or update
    const result = await formAction(data);

    // show toast of server returned result, reset form if successful
    if (result?.success) {
      toast.success(result.message);
      if (carreer === undefined) {
        form.reset();
        return;
      }
      // ERROR: we have to redirect, otherwise the intercepting route throws a 404 when revalidating
      router.push("/admin/carreer");
    } else if (!result?.success) {
      toast.error(result.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
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
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="A short description."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="typeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Type</FormLabel>
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
                  {typeCbo.map((item, index) => (
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
