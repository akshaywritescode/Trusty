import { z } from "zod";

export const SignupSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z
    .string()
    .min(8, "Password must be at least 10 characters long")
    .max(28, "Password must not exceed 35 characters")
    .regex(/[A-Za-z]/, "Password must contain at least one letter")
    .regex(/\d/, "Password must contain at least one number")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    ),
});

export type TSignupSchema = z.infer<typeof SignupSchema>;


//Response schema

const targetSchema = z.object({
  $id: z.string(),
  $createdAt: z.string().datetime(),
  $updatedAt: z.string().datetime(),
  // Add additional fields in the targets object here if required
});

export const SignupResponseSchema = z.object({
  $id: z.string(),
  $createdAt: z.string().datetime(),
  $updatedAt: z.string().datetime(),
  accessedAt: z.string().datetime(),
  email: z.string().email(),
  emailVerification: z.boolean(),
  labels: z.array(z.string()),
  mfa: z.boolean(),
  name: z.string(),
  passwordUpdate: z.string().datetime(),
  phone: z.string(),
  phoneVerification: z.boolean(),
  prefs: z.record(z.any()), // Adjust schema based on actual preferences structure
  registration: z.string().datetime(),
  status: z.boolean(),
  targets: z.array(targetSchema),
});

export type TSignupResponseSchema = z.infer<typeof SignupResponseSchema>;
