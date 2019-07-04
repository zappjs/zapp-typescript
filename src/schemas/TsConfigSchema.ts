export const TsConfigSchema = {
  type: 'object',
  properties: {
    compilerOptions: {
      type: 'object',
      properties: {
        outDir: {
          type: 'string'
        },
        lib: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        module: {
          type: 'string'
        },
        declaration: {
          type: 'boolean'
        },
        forceConsistentCasingInFileNames: {
          type: 'boolean'
        },
        noImplicitAny: {
          type: 'boolean'
        },
        noUnusedLocals: {
          type: 'boolean'
        },
        target: {
          type: 'boolean'
        }
      }
    },
    exclude: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  }
}