export interface ITsConfigSpec {
  compilerOptions: {
    outDir?: string;
    lib?: string[];
    module?: string;
    declaration?: boolean;
    forceConsistentCasingInFileNames?: boolean;
    noImplicitAny: boolean;
    noUnusedLocals: boolean;
    target: string;
  };
  exclude: string[];
}
