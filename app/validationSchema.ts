import { Status } from "@prisma/client";
import { z } from "zod";

export const issueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255),
    description: z.string().min(1, 'Description is required.')
});

export const patchIssueSchema = z.object({
    title: z.string().min(1, 'Title is required.').max(255).optional(),
    description: z.string().min(1, 'Description is required.').optional(),
    //not in the application rn, only valid for postman
    status: z.nativeEnum(Status).optional(),
});
