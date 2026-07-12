import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z.string().min(10, "Please enter a message of at least 10 characters"),
  website: z.string().max(0, "Invalid submission"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
