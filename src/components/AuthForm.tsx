import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Must be atleast 8 characters" }).regex(
      /^(?=.*?[A-Z])/, { message: "Must contain at least 1 uppercase letter" }
    ).regex(
      /^(?=.*?[a-z])/, { message: "Must contain at least 1 lowercase letter" }
    ).regex(
      /^(?=.*?[0-9])/, { message: "Must contain at least 1 number" }
    ).regex(
      /^(?=.*?[#?!@$%^&*-])/, { message: "Must contain at least 1 special character #?!@$%^&*-" }
    )
})

export default function AuthForm({ onSubmit, width }: { onSubmit: SubmitHandler<{email: string, password: string}>, width?: string }) {
    const form = useForm<z.infer<typeof formSchema>>({
            resolver: zodResolver(formSchema),
            defaultValues: {
              email: "",
              password: ""
            },
        })
    
    return (<Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className={width ? "space-y-4 flex flex-col w-full max-w-" + width : "space-y-4 flex flex-col "}>
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input placeholder="Enter your Email" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input placeholder="Enter your Password" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <br />
            <Button type="submit">Submit</Button>
        </form>
    </Form>)
}