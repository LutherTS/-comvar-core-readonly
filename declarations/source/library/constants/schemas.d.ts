import * as z from "zod";
export declare const ConfigPreSchema: z.ZodRecord<z.ZodString, z.ZodUnknown>;
export declare const ConfigLibrariesSchema: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodString>>>;
