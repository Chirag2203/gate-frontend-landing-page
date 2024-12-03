import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ImSpinner2 } from "react-icons/im";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const FormSchema = z.object({
  pin: z.string().min(4, {
    message: "Your one-time password must be 4 characters.",
  }),
});

const OTPcomponent = ({
  handleVerify,
  handleClick,
  title,
  loading,
  loadingVerify,
}: {
  handleVerify: (otp: string) => void; // Pass OTP to handleVerify
  title?: string;
  handleClick?: () => void;
  loading?: boolean;
  loadingVerify?: boolean;
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (data: { pin: string }) => {
    handleVerify(data.pin); // Pass OTP to parent component
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button className="w-full mt-4 gap-2" variant={"blueGradient"} onClick={handleClick}>
          {loading ? (
            <>
              <ImSpinner2 className="animate-spin" /> Sending OTP
            </>
          ) : (
            title
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-8">Enter the OTP to continue</DialogTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)} // Handle form submission
              className="w-2/3 mx-auto items-center flex flex-col space-y-6"
            >
              <FormField
                control={form.control}
                name="pin"
                render={({ field }) => (
                  <FormItem className="flex flex-col items-center">
                    <FormControl>
                      <InputOTP maxLength={4} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription className="text-center">
                      Please enter the one-time password sent to your mobile
                      number to join waitlist.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="px-8">
                {loadingVerify ? (
                  <>
                    <ImSpinner2 className="animate-spin" /> Verifying
                  </>
                ) : (
                  "Verify OTP"
                )}
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OTPcomponent;
