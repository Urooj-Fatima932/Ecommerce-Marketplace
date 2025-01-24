"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import Input from "@/components/ui/InputField"

const formSchema = z.object({
    Search: z.string().regex(/^[a-zA-Z0-9]*$/, { message: "No special characters allowed." }),
})
function Searchbar() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          Search: "",
        },
      })
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
      function onError(errors: Record<string, any>) {
        // Extract the first error message
        const firstError = errors.Search?.message;
        if (firstError) {
          alert(firstError); // Display error in alert
        }
      }
    return ( 
      <Form {...form} >
      <form onSubmit={form.handleSubmit(onSubmit,onError)} className="space-y-8 ">
        <FormField
          control={form.control}
          name="Search"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Search" {...field} />
                
              </FormControl>
              
             
            </FormItem>
          )}
        />

      </form>
    </Form>
    )}
    export default Searchbar;