export const ConfigPreSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export const ConfigLibrariesSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>>>;
import * as z from "zod";
