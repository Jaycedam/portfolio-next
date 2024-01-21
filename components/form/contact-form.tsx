"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@components/ui/input";
import { Button } from "@components/ui/button";
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
import { emailSchema } from "@/lib/zod-schema";
import { sendEmail } from "@/actions/email";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SpinnerSVG from "@components/svg/spinner-svg";
import { MdEmail } from "react-icons/md";

export default function ContactForm() {
  // form definition
  const form = useForm<z.infer<typeof emailSchema>>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
      subject: "",
      message: "",
    },
  });

  // form on submit
  const handleSubmit = async (data: z.infer<typeof emailSchema>) => {
    // server action to create or update
    const result = await sendEmail(data);

    // show toast of server returned result, reset form if successful
    if (result?.success) {
      toast.success(result.message);
      form.reset();
    } else if (!result?.success) {
      toast.error(result?.message);
    }
  };

  return (
    <section id="contact">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle>Contactar</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-4"
            >
              <div className="grid gap-4 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Ingresa tu email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Asunto</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder=""
                        className="resize-y"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                className="w-24"
                disabled={form.formState.isSubmitting}
                type="submit"
              >
                {form.formState.isSubmitting ? (
                  <SpinnerSVG size="6" />
                ) : (
                  <span className="flex items-center gap-2">
                    <MdEmail /> Enviar
                  </span>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
