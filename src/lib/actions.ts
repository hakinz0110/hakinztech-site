"use server";

import { z } from "zod";

// This is a placeholder for form submission logic.
// In a real application, you would handle the form data here,
// for example, by sending an email or saving it to a database.
// As the form has been removed, this is no longer actively used but
// is kept here as an example for future reference.

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ContactFormState = {
  message: string;
  status: "success" | "error" | "idle";
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      message: "There was an error with your submission.",
      status: "error",
    };
  }

  try {
    console.log("New contact form submission:");
    console.log(validatedFields.data);

    return {
      message: "Thank you for your message! I'll get back to you soon.",
      status: "success",
    };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return {
      message: "Something went wrong. Please try again later.",
      status: "error",
    };
  }
}
