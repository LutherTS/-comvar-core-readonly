export function freshImport(moduleUrl: string): Promise<{
    default: unknown;
} | null>;
