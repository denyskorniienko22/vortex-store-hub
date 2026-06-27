import z from "zod";

export const loginSchema = z.object({
  email: z.email("Invalid email"),
  password: z.string().min(1, "This field is required"),
});

export const registerSchema = z
  .object({
    username: z.string().min(6, "Username must be more 5 characters"),
    email: z.email("Invalid email"),
    password: z.string().min(8, "Password must be more 7 characters"),
    confirmPassword: z.string(),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
