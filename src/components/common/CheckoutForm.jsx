"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

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
  address: z.string().min(3, {
    message: "Please fill out this field.",
  }),
  city: z.string().min(3, {
    message: "Please fill out this field.",
  }),
  state: z.string({
    required_error: "Please select an state.",
    message: "Please select an state",
  }),
  zip: z.string().min(3, {
    message: "Please fill out this field.",
  }),
  country: z.string({
    required_error: "Please select an country",
    message: "Please select an country",
  }),
});

export function CheckoutForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      spousename: "",
      contactphone: "",
      otherphone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
    },
  });

  function onSubmit(values) {
    console.log(values);
  }

  return (
    <div className="w-full">
      <Form {...form} className="w-full">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="gap-y-4 flex w-full flex-wrap"
        >
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  First Name <span className="text-red-600">*</span>
                </FormLabel>
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
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  Last Name <span className="text-red-600">*</span>
                </FormLabel>
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
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  Email <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="spousename"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  Spouse Name <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Spouse Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactphone"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  Contact Phone <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Contact Phone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="otherphone"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>Other Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Other Phone" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  Address <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  City <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your City" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="State"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  State <span className="text-red-600">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a State" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Bangladesh">Dhaka</SelectItem>
                    <SelectItem value="India">Gazipur</SelectItem>
                    <SelectItem value="Pkisthan">Khulna</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zip"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  Zip <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Zip" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="lg:w-1/2 w-full sm:pr-3 space-y-1">
                <FormLabel>
                  Country <span className="text-red-600">*</span>
                </FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Bangladesh">Bangladesh</SelectItem>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="Pkisthan">Pkisthan</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="orderNote"
            render={({ field }) => (
              <FormItem className="w-full sm:pr-3 space-y-1">
                <FormLabel>Order Notes (optional)</FormLabel>
                <Textarea placeholder="Notes about your order, e.g special notes for delivery" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="bg-BtnBg py-2 invisible text-center px-3 rounded-3xl font-semibold text-xs shadow-md shadow-slate-700 uppercase border-btnColor border-[2px] mt-1 text-white m-auto"
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
