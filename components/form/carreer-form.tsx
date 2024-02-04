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
  const formTitle = carreer ? "Update Carreer" : "Create Carreer";

  // form definition
  const form = useForm<CarreerForm>({
    resolver: zodResolver(carreerSchema),
    defaultValues: {
      id: carreer?.id,
      name_es: carreer?.name_es || "",
      name_en: carreer?.name_en || "",
      about_es: carreer?.about_es || "",
      about_en: carreer?.about_en || "",
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
      router.push("/admin/carreer");
    } else if (!result?.success) {
      toast.error(result.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
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

        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name_en"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name (EN)</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name_es"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name (ES)</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
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
        </div>

        <FormField
          control={form.control}
          name="about_es"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About (ES)</FormLabel>
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
          name="about_en"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About (EN)</FormLabel>
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
                      {item.name_en}
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
