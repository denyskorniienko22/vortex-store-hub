import z from "zod"

export const checkoutSchema = z.object({
  phone: z
    .string()
    .min(1, "This field is required")
    .regex(/^(\+?380)[0-9]{9}$/, "Invalid phone number. Format: +380XXXXXXXXX"),
  surname: z
    .string()
    .min(1, "This field is required")
    .max(50, "Too long")
    .regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'\s-]+$/, "Only letters, spaces, and hyphens are allowed"),
  name: z
    .string()
    .min(1, "This field is required")
    .max(50, "Too long")
    .regex(/^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ'\s-]+$/, "Only letters, spaces, and hyphens are allowed"),
  way_to_deliver: z.string().nonempty(),
  way_to_payment: z.string().nonempty(),
})

export type CheckoutFormValues = z.infer<typeof checkoutSchema>
