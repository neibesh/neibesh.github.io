module.exports = {
	// parser: "@typescript-eslint/parser", // Specifies the ESLint parser
	extends: [
		"plugin:@typescript-eslint/recommended",
		"react-app",
	],
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: "module", // Allows for the use of imports
	},
	rules: {
		"@typescript-eslint/no-namespace": 0,
		"@typescript-eslint/no-explicit-any": 0,
		"@typescript-eslint/explicit-function-return-type": 0,
		"@typescript-eslint/no-empty-function": 0,
		"@typescript-eslint/camelcase": 0,
		"@typescript-eslint/no-non-null-assertion": 0,
		"@typescript-eslint/no-non-null-asserted-optional-chain": 0,
		"@typescript-eslint/explicit-module-boundary-types": 0,
		"react-hooks/exhaustive-deps": 0
	},
};
