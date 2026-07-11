export type ConfigModule = import("../../types/index.ts").ConfigModule;
export declare function freshImport(moduleUrl: string): Promise<import("../../types/index.ts").ConfigModule | null>;
