import {
  Dialog,
  DialogContent,
  // DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  // FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});
const OTPcomponent = ({
  handleVerify,
  title,
  pin,
}: {
  handleVerify: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
  title?: string;
  pin?: string;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
  console.log(pin);

  return (
    <Dialog >
      <DialogTrigger className="w-full">
        {" "}
        <Button className="w-full mt-4 gap-2">{title}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-8">Enter the OTP to continue</DialogTitle>

          <Form {...form}>
            <div className="w-2/3 mx-auto items-center flex flex-col space-y-6">
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription className="text-center">
                      Please enter the one-time password sent to your mobile
                      number.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button onClick={handleVerify} className="px-8">
                Verify OTP
              </Button>
            </div>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OTPcomponent;
