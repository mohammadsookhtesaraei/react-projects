import { z } from "zod"



export const registerSchema = z.object({
    email: z.email({ pattern: z.regexes.email }),
    name: z.string(),
    password: z.string().min(6, "at least six characters"),
    // role: z.string(),
    avatar: z.string()

});