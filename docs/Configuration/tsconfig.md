## tsconfig.json

```json5
{
	compilerOptions: {
		experimentalDecorators: true,
		target: 'es5',
		lib: ['dom', 'dom.iterable', 'esnext'],
		allowJs: true,
		skipLibCheck: true,
		esModuleInterop: true,
		allowSyntheticDefaultImports: true,
		strict: true,
		forceConsistentCasingInFileNames: true,
		noFallthroughCasesInSwitch: true,
		module: 'esnext',
		moduleResolution: 'node',
		resolveJsonModule: true,
		isolatedModules: true,
		noEmit: true,
		jsx: 'react-jsx', //React 17 transform https://www.typescriptlang.org/tsconfig#jsx
		baseUrl: '.',
		paths: {
			'@/*': ['src/*'],
		},
	},
	include: ['src/**/*'],
	exclude: ['node_modules', 'build'],
}
```
