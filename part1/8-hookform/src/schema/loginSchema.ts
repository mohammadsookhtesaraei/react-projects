import { z } from "zod"



export const loginSchema = z.object({
    email: z.email({ pattern: z.regexes.email }),
    password: z.string().min(6, "at least six characters"),
});

