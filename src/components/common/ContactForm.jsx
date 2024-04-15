"use client"
import { IoIosSend } from "react-icons/io";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  firstname: z.string().min(3, {
    message: "Please fill out this field.",
  }),
  lastname: z.string().min(3, {
    message: "Please fill out this field.",
  }),
  email: z.string().min(3, {
    message: "Please fill out this field.",
  }),
  spousename: z.string().min(3, {
    message: "Please fill out this field.",
  }),
  contactphone: z.string().min(3, {
    message: "Please fill out this field.",
  }),
  subject: z.string().min(3, {
    message: "Please fill out this field.",
  }),
})

export function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      contactphone: "",
      subject: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
  }

  return (
    <div className="w-full">
      <Form {...form} className="w-full">
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-y-5 flex w-full flex-wrap">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="sm:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>First Name <span className="text-red-600">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="sm:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>Last Name <span className="text-red-600">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="sm:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>Email <span className="text-red-600">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactphone"
            render={({ field }) => (
              <FormItem className="sm:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>Contact Phone <span className="text-red-600">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Contact Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem className="sm:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>Subject <span className="text-red-600">*</span></FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem className="w-full sm:pr-3 space-y-1">
              <FormLabel>Comments</FormLabel>
              <Textarea placeholder="Type your message here." />
            </FormItem>
          )}
        />
          <Button type="submit" className="bg-BtnBg py-2 flex gap-1 text-center px-3 rounded-3xl font-semibold text-base shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] mt-1 text-white w-28">send <IoIosSend size={20}/></Button>
        </form>
      </Form>
    </div>
  )
}
