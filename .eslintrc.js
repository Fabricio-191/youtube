module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	ignorePatterns: ['lib/*'],
	overrides: [
		{
			extends: [ 'eslint:recommended' ],
			parser: '@babel/eslint-parser',
			parserOptions: {
				sourceType: 'module',
				requireConfigFile: false,
			},
			files: ['*.js', '*.jsx', '*.cjs', '*.mjs'],
			rules: {
				// "init-declarations": ["error", "always", { "ignoreForLoopInit": true }],
				// 'prefer-named-capture-group': 'error',
				// curly: ['error', 'multi', 'consistent'],
				'no-mixed-operators': [
					'error',
					{
						allowSamePrecedence: false,
					},
				],
				// 'require-unicode-regexp': 'error',
				complexity: 'error',
				'no-return-assign': 'error',
				'no-sequences': 'error',
				'no-alert': 'error',
				'no-caller': 'error',
				'no-constructor-return': 'error',
				'no-div-regex': 'error',
				'no-else-return': 'error',
				'no-empty-function': 'error',
				'no-eq-null': 'error',
				'no-eval': 'error',
				'no-extend-native': 'error',
				'no-extra-bind': 'error',
				'no-extra-label': 'error',
				'no-floating-decimal': 'error',
				'no-implicit-coercion': 'error',
				'no-implied-eval': 'error',
				'no-invalid-this': 'error',
				'no-iterator': 'error',
				'no-implicit-globals': 'error',
				'no-bitwise': 'warn',
				'no-loop-func': 'error',
				'no-console': 'error',
				'no-useless-concat': 'error',
				'no-extra-parens': 'error',
				'no-loss-of-precision': 'error',
				'no-unused-expressions': 'error',
				'no-unmodified-loop-condition': 'error',
				'no-throw-literal': 'error',
				'no-self-compare': 'error',
				'no-script-url': 'error',
				'no-octal-escape': 'error',
				'no-proto': 'error',
				'no-nonoctal-decimal-escape': 'error',
				'no-new-wrappers': 'error',
				'no-new-func': 'error',
				'no-multi-spaces': 'error',
				'no-multi-str': 'error',
				'no-new': 'error',
				'no-lone-blocks': 'error',
				'no-template-curly-in-string': 'error',
				'no-promise-executor-return': 'error',
				'no-unreachable-loop': 'error',
				'no-array-constructor': 'error',
				'no-lonely-if': 'error',
				'no-negated-condition': 'error',
				'no-nested-ternary': 'error',
				'no-new-object': 'error',
				'no-trailing-spaces': 'error',
				'no-unneeded-ternary': 'error',
				'no-whitespace-before-property': 'error',
				'no-confusing-arrow': 'error',
				'no-useless-constructor': 'error',
				'no-void': 'error',
				'no-undef-init': 'error',
				'no-undefined': 'error',
				'no-useless-return': 'error',
				'no-var': 'error',
				'no-use-before-define': [
					'error',
					'nofunc',
				],
				'no-multiple-empty-lines': [
					'error',
					{
						max: 2,
						maxEOF: 1,
						maxBOF: 0,
					},
				],
				'no-empty': [
					'error',
					{
						allowEmptyCatch: true,
					},
				],
				'no-mixed-spaces-and-tabs': [
					'error',
					'smart-tabs',
				],
				'no-duplicate-imports': [
					'error',
					{
						includeExports: true,
					},
				],
				'no-useless-computed-key': [
					'error',
					{
						enforceForClassMembers: true,
					},
				],
				'prefer-arrow-callback': 'error',
				'prefer-const': 'error',
				'prefer-numeric-literals': 'error',
				'prefer-rest-params': 'error',
				'prefer-spread': 'error',
				'prefer-promise-reject-errors': 'error',
				'prefer-regex-literals': 'error',
				'prefer-exponentiation-operator': 'error',
				semi: [
					'error',
					'always',
				],
				'semi-spacing': 'error',
				'semi-style': [
					'error',
					'last',
				],
				'comma-spacing': 'error',
				'comma-dangle': [
					'error',
					{
						objects: 'always-multiline',
						arrays: 'always-multiline',
					},
				],
				quotes: [
					'error',
					'single',
					{
						avoidEscape: true,
					},
				],
				'quote-props': [
					'error',
					'as-needed',
				],
				'arrow-spacing': 'error',
				'arrow-body-style': [
					'error',
					'as-needed',
				],
				'arrow-parens': [ 'error', 'as-needed' ],
				'object-curly-spacing': ['error', 'always', {
					arraysInObjects: false,
				}],
				'object-curly-newline': [
					'error',
					{
						multiline: true,
						consistent: true,
					},
				],
				'template-curly-spacing': 'error',
				'template-tag-spacing': [
					'error',
					'always',
				],
				'space-in-parens': [
					'error',
					'never',
				],
				'space-before-blocks': [
					'error',
					'never',
				],
				'space-before-function-paren': [
					'error',
					{
						anonymous: 'never',
						named: 'never',
						asyncArrow: 'always',
					},
				],
				'dot-location': [
					'error',
					'property',
				],
				eqeqeq: 'error',
				indent: [
					'error',
					'tab',
					{
						SwitchCase: 1,
					},
				],
				'linebreak-style': [
					'error',
					'windows',
				],
				'block-scoped-var': 'error',
				'class-methods-use-this': 'error',
				'array-callback-return': 'error',
				'default-case': 'error',
				'default-case-last': 'error',
				'default-param-last': 'error',
				'grouped-accessor-pairs': 'error',
				'max-classes-per-file': [
					'error',
					3,
				],
				yoda: 'error',
				radix: 'warn',
				'switch-colon-spacing': [
					'error',
					{
						after: false,
					},
				],
				'wrap-regex': 'error',
				'symbol-description': 'error',
				'vars-on-top': 'error',
				'require-await': 'error',
				'spaced-comment': [
					'error',
					'always',
					{
						block: {
							exceptions: [
								'-',
							],
						},
					},
				],
				'yield-star-spacing': [
					'error',
					'after',
				],
				'rest-spread-spacing': [
					'error',
					'never',
				],
				'unicode-bom': [
					'error',
					'never',
				],
				'func-call-spacing': [
					'error',
					'never',
				],
				'newline-per-chained-call': [
					'error',
					{
						ignoreChainWithDepth: 3,
					},
				],
				'new-parens': [
					'error',
					'always',
				],
				'wrap-iife': [
					'error',
					'inside',
				],
				'generator-star-spacing': [
					'error',
					{
						before: false,
						after: true,
					},
				],
				'nonblock-statement-body-position': [
					'error',
					'beside',
					{
						overrides: {},
					},
				],
				'padded-blocks': [
					'error',
					'never',
				],
				'accessor-pairs': 'error',
				'space-unary-ops': 'error',
				'no-useless-rename': 'error',
				'object-shorthand': 'error',
				'no-shadow': [
					'error',
					{
						builtinGlobals: true,
					},
				],
				'prefer-destructuring': [
					'error',
					{
						array: true,
						object: true,
					},
					{
						enforceForRenamedProperties: false,
					},
				],
				'operator-linebreak': [
					'error',
					'after',
					{
						overrides: {},
					},
				],
				'operator-assignment': [
					'error',
					'always',
				],
				'keyword-spacing': [
					'error',
					{
						before: false,
						after: false,
						overrides: {
							return: {
								before: true,
								after: true,
							},
							from: {
								before: true,
								after: true,
							},
							delete: {
								before: true,
							},

							continue: {
								before: true,
							},
							extends: {
								before: true,
							},
							throw: {
								before: true,
							},
							break: {
								before: true,
							},
							await: {
								before: true,
							},
							this: {
								before: true,
							},
							as: {
								before: true,
							},

							function: {
								after: true,
							},
							default: {
								after: true,
							},
							typeof: {
								after: true,
							},
							export: {
								after: true,
							},
							import: {
								after: true,
							},
							const: {
								after: true,
							},
							case: {
								after: true,
							},
							get: {
								after: true,
							},
							set: {
								after: true,
							},
							of: {
								after: true,
							},
						},
					},
				],
			},
		},
		{
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
			],
			parser: '@typescript-eslint/parser',
			parserOptions: {
				sourceType: 'module',
				project: __dirname + '/tsconfig.json',
			},
			files: ['*.ts', '*.tsx', '*.d.ts'],
			plugins: [ '@typescript-eslint' ],
			rules: {
				'@typescript-eslint/adjacent-overload-signatures': 'error',
				/*
				'@typescript-eslint/array-type': ['error', {
					default: 'array-simple',
				}],
				'@typescript-eslint/strict-boolean-expressions': [
					'error', {
						allowString: false,
						allowNumber: false,
						allowNullableObject: false,
						allowNullableBoolean: false,
						allowNullableString: false,
						allowNullableNumber: false,
						allowAny: false,
						allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
					},
				],
				'no-bitwise': 'warn',
				*/
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/ban-ts-comment': ['error', { 'ts-expect-error': 'allow-with-description' }],
				'@typescript-eslint/ban-types': 'error',
				'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
				'@typescript-eslint/consistent-type-imports': ['error', {
					prefer: 'type-imports',
					disallowTypeAnnotations: true,
				}],
				'@typescript-eslint/explicit-member-accessibility': [
					'error',
					{
						accessibility: 'explicit',
						overrides: {
							constructors: 'no-public',
						},
					},
				],
				'@typescript-eslint/no-base-to-string': 'error',
				'@typescript-eslint/no-confusing-non-null-assertion': 'error',
				'@typescript-eslint/no-empty-interface': [
					'error',
					{
					  allowSingleExtends: false,
					},
				],
				'@typescript-eslint/no-explicit-any': 'error',
				'@typescript-eslint/no-extra-non-null-assertion': 'error',
				'@typescript-eslint/no-floating-promises': 'error',
				'@typescript-eslint/no-for-in-array': 'error',
				'@typescript-eslint/no-inferrable-types': 'error',
				'@typescript-eslint/no-extraneous-class': 'error',
				'@typescript-eslint/no-invalid-void-type': 'error',
				'@typescript-eslint/no-misused-new': 'error',
				'@typescript-eslint/no-misused-promises': [
					'error',
					{
						checksVoidReturn: true,
					  checksConditionals: true,
					},
				  ],
				'@typescript-eslint/no-namespace': ['error', { allowDeclarations: false, allowDefinitionFiles: true }],
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
				'@typescript-eslint/no-parameter-properties': 'error',
				'@typescript-eslint/no-require-imports': 'error',
				'@typescript-eslint/no-this-alias': [
					'error',
					{
					  allowDestructuring: false,
					  allowedNames: [],
					},
				  ],
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
				'@typescript-eslint/no-unnecessary-qualifier': 'error',
				'@typescript-eslint/no-unnecessary-type-arguments': 'error',
				'@typescript-eslint/no-unnecessary-type-assertion': 'error',
				'@typescript-eslint/no-unsafe-assignment': 'error',
				'@typescript-eslint/no-unsafe-call': 'error',
				'@typescript-eslint/no-unsafe-member-access': 'error',
				'@typescript-eslint/no-unsafe-return': 'error',
				'@typescript-eslint/no-var-requires': 'error',
				'@typescript-eslint/prefer-for-of': 'error',
				'@typescript-eslint/prefer-function-type': 'error',
				'@typescript-eslint/prefer-includes': 'error',
				'@typescript-eslint/prefer-ts-expect-error': 'error',
				'@typescript-eslint/prefer-reduce-type-parameter': 'error',
				'@typescript-eslint/prefer-regexp-exec': 'error',
				'@typescript-eslint/prefer-readonly': 'error',
				'@typescript-eslint/require-array-sort-compare': 'error',
				'@typescript-eslint/unified-signatures': 'error',
				'@typescript-eslint/unbound-method': [
					'error',
					{
					  ignoreStatic: true,
					},
				],
				'@typescript-eslint/type-annotation-spacing': ['error'],
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
				'@typescript-eslint/restrict-template-expressions': 'error',
				'@typescript-eslint/restrict-plus-operands': ['error', { checkCompoundAssignments: true }],
				'no-return-assign': 'error',
				'no-sequences': 'error',
				'no-alert': 'error',
				'no-caller': 'error',
				'no-constructor-return': 'error',
				'no-div-regex': 'error',
				'no-else-return': 'error',
				'no-eq-null': 'error',
				'no-eval': 'error',
				'no-extend-native': 'error',
				'no-extra-bind': 'error',
				'no-extra-label': 'error',
				'no-floating-decimal': 'error',
				'no-implicit-coercion': 'error',
				'no-iterator': 'error',
				'no-implicit-globals': 'error',
				'no-console': 'error',
				'no-useless-concat': 'error',
				'no-unmodified-loop-condition': 'error',
				'no-self-compare': 'error',
				'no-script-url': 'error',
				'no-octal-escape': 'error',
				'no-proto': 'error',
				'no-nonoctal-decimal-escape': 'error',
				'no-new-wrappers': 'error',
				'no-new-func': 'error',
				'no-multi-spaces': 'error',
				'no-multi-str': 'error',
				'no-new': 'error',
				'no-lone-blocks': 'error',
				'no-template-curly-in-string': 'error',
				'no-promise-executor-return': 'error',
				'no-unreachable-loop': 'error',
				'no-lonely-if': 'error',
				'no-negated-condition': 'error',
				'no-nested-ternary': 'error',
				'no-new-object': 'error',
				'no-trailing-spaces': 'error',
				'no-unneeded-ternary': 'error',
				'no-whitespace-before-property': 'error',
				'no-confusing-arrow': 'error',
				'no-void': 'error',
				'no-undef-init': 'error',
				'no-undefined': 'error',
				'no-useless-return': 'error',
				'no-var': 'error',
				'no-multiple-empty-lines': [
					'error',
					{
						max: 2,
						maxEOF: 1,
						maxBOF: 0,
					},
				],
				'no-empty': [
					'error',
					{
						allowEmptyCatch: true,
					},
				],
				'no-mixed-spaces-and-tabs': [
					'error',
					'smart-tabs',
				],
				'no-useless-computed-key': [
					'error',
					{
						enforceForClassMembers: true,
					},
				],
				'prefer-arrow-callback': 'error',
				'prefer-const': 'error',
				'prefer-numeric-literals': 'error',
				'prefer-rest-params': 'error',
				'prefer-spread': 'error',
				'prefer-promise-reject-errors': 'error',
				'prefer-regex-literals': 'error',
				'prefer-exponentiation-operator': 'error',
				'semi-spacing': 'error',
				'semi-style': [
					'error',
					'last',
				],
				'comma-spacing': 'off',
				'comma-dangle': 'off',
				'quote-props': [
					'error',
					'as-needed',
				],
				'arrow-spacing': 'error',
				'arrow-body-style': [
					'error',
					'as-needed',
				],
				'arrow-parens': [
					'error',
					'as-needed',
				],
				'object-curly-newline': [
					'error',
					{
						multiline: true,
						consistent: true,
					},
				],
				'template-curly-spacing': 'error',
				'template-tag-spacing': [
					'error',
					'always',
				],
				'space-in-parens': [
					'error',
					'never',
				],
				'dot-location': [
					'error',
					'property',
				],
				eqeqeq: 'error',
				indent: 'off',
				'linebreak-style': [
					'error',
					'windows',
				],
				'block-scoped-var': 'error',
				'class-methods-use-this': 'error',
				'array-callback-return': 'error',
				'default-case': 'error',
				'default-case-last': 'error',
				'default-param-last': 'off',
				'grouped-accessor-pairs': 'error',
				'max-classes-per-file': [
					'error',
					3,
				],
				yoda: 'error',
				'new-cap': 'error',
				'wrap-regex': 'error',
				'symbol-description': 'error',
				'vars-on-top': 'error',
				'spaced-comment': [
					'error',
					'always',
					{
						block: {
							exceptions: [
								'-',
							],
						},
					},
				],
				'yield-star-spacing': [
					'error',
					'after',
				],
				'rest-spread-spacing': [
					'error',
					'never',
				],
				'unicode-bom': [
					'error',
					'never',
				],
				'newline-per-chained-call': [
					'error',
					{
						ignoreChainWithDepth: 3,
					},
				],
				'new-parens': [
					'error',
					'always',
				],
				'wrap-iife': [
					'error',
					'inside',
				],
				'generator-star-spacing': [
					'error',
					{
						before: false,
						after: true,
					},
				],
				'nonblock-statement-body-position': [
					'error',
					'beside',
					{
						overrides: {},
					},
				],
				'padded-blocks': [
					'error',
					'never',
				],
				'accessor-pairs': 'error',
				'space-unary-ops': 'error',
				'no-useless-rename': 'error',
				'object-shorthand': 'error',
				'prefer-destructuring': [
					'error',
					{
						array: true,
						object: true,
					},
					{
						enforceForRenamedProperties: false,
					},
				],
				'operator-linebreak': [
					'error',
					'after',
					{
						overrides: {},
					},
				],
				'operator-assignment': [
					'error',
					'always',
				],
				'keyword-spacing': 'off',
				'@typescript-eslint/brace-style': 'error',
				'@typescript-eslint/comma-dangle': [
					'error',
					{
						objects: 'always-multiline',
						arrays: 'always-multiline',
					},
				],
				'dot-notation': 'off',
				'@typescript-eslint/dot-notation': 'error',
				'@typescript-eslint/comma-spacing': 'error',
				'@typescript-eslint/default-param-last': 'error',
				'func-call-spacing': 'off',
				'@typescript-eslint/func-call-spacing': [
					'error',
					'never',
				],
				'@typescript-eslint/lines-between-class-members': ['error', {
					exceptAfterSingleLine: true,
				}],
				'@typescript-eslint/keyword-spacing': [
					'error',
					{
						before: false,
						after: false,
						overrides: {
							return: {
								before: true,
								after: true,
							},
							from: {
								before: true,
								after: true,
							},
							of: {
								before: true,
								after: true,
							},
							continue: {
								before: true,
							},
							extends: {
								before: true,
							},
							delete: {
								before: true,
							},
							throw: {
								before: true,
							},
							break: {
								before: true,
							},
							await: {
								before: true,
							},
							this: {
								before: true,
							},
							function: {
								after: true,
							},
							default: {
								after: true,
							},
							typeof: {
								after: true,
							},
							export: {
								after: true,
							},
							import: {
								after: true,
							},
							const: {
								after: true,
							},
							case: {
								after: true,
							},
							get: {
								after: true,
							},
							set: {
								after: true,
							},
							let: {
								after: true,
							},
							as: {
								before: true,
								after: true,
							},
						},
					},
				],
				'init-declarations': 'off',
				'@typescript-eslint/init-declarations': ['error'],
				'@typescript-eslint/indent': [
					'error',
					'tab',
					{
						SwitchCase: 1,
					},
				],
				'no-array-constructor': 'off',
				'@typescript-eslint/no-array-constructor': ['error'],
				'no-dupe-class-members': 'off',
				'@typescript-eslint/no-dupe-class-members': ['error'],
				'no-empty-function': 'off',
				'@typescript-eslint/no-empty-function': ['error'],
				'no-extra-parens': 'off',
				'@typescript-eslint/no-extra-parens': ['error'],
				'no-extra-semi': 'off',
				'@typescript-eslint/no-extra-semi': ['error'],
				'no-implied-eval': 'off',
				'@typescript-eslint/no-implied-eval': ['error'],
				'no-invalid-this': 'off',
				'@typescript-eslint/no-invalid-this': ['error'],
				'no-loop-func': 'off',
				'@typescript-eslint/no-loop-func': ['error'],
				'no-loss-of-precision': 'off',
				'@typescript-eslint/no-loss-of-precision': ['error'],
				'no-redeclare': 'off',
				'@typescript-eslint/no-redeclare': ['error'],
				'no-shadow': 'off',
				'@typescript-eslint/no-shadow': [
					'error',
					{
						builtinGlobals: true,
					},
				],
				'no-throw-literal': 'off',
				'@typescript-eslint/no-throw-literal': ['error'],
				'no-unused-expressions': 'off',
				'@typescript-eslint/no-unused-expressions': ['error'],
				'no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': ['error'],
				'no-use-before-define': 'off',
				'@typescript-eslint/no-use-before-define': [
					'error',
					'nofunc',
				],
				'no-useless-constructor': 'off',
				'@typescript-eslint/no-useless-constructor': ['error'],
				'object-curly-spacing': [
					'error',
					'always',
				],
				quotes: 'off',
				'@typescript-eslint/quotes': [
					'error',
					'single',
					{
						avoidEscape: true,
					},
				],
				semi: 'off',
				'@typescript-eslint/semi': [
					'error',
					'always',
				],
				'space-before-function-paren': 'off',
				'@typescript-eslint/space-before-function-paren': [
					'error',
					{
						anonymous: 'never',
						named: 'never',
						asyncArrow: 'always',
					},
				],
				'@typescript-eslint/consistent-type-assertions': [
					'error',
					{
						assertionStyle: 'as',
						objectLiteralTypeAssertions: 'never',
					},
				],
				'@typescript-eslint/consistent-type-exports': 'error',
				'@typescript-eslint/member-delimiter-style': 'error',
				'@typescript-eslint/no-non-null-assertion': 'error',
				'@typescript-eslint/prefer-as-const': 'error',
				'@typescript-eslint/prefer-nullish-coalescing': 'error',
				'@typescript-eslint/prefer-optional-chain': 'error',
				'@typescript-eslint/sort-type-union-intersection-members': 'error',
				'@typescript-eslint/space-infix-ops': 'error',
				'@typescript-eslint/explicit-module-boundary-types': 'off',
				'@typescript-eslint/explicit-function-return-type': 'off', // ['error', { allowExpressions: true, }],

				/*
				'@typescript-eslint/typedef': [
					'error', {
						arrayDestructuring: true,
						arrowParameter: true,
						memberVariableDeclaration: true,
						objectDestructuring: true,
						parameter: true,
						propertyDeclaration: true,
						variableDeclaration: false,
						variableDeclarationIgnoreFunction: true,
					}
				],
				'@typescript-eslint/no-type-alias': ['error', {
					"allowAliases": "always"
				}],
				"@typescript-eslint/no-unnecessary-condition": "error",
				"@typescript-eslint/consistent-indexed-object-style": [
					"error",
					"index-signature"
				],
				'@typescript-eslint/consistent-type-exports': 'error',
				"@typescript-eslint/no-confusing-void-expression": [
					"error",
					{ "ignoreArrowShorthand": true, "ignoreVoidOperator": true }
				],
				"@typescript-eslint/no-meaningless-void-operator": "error",
				"@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",
				"@typescript-eslint/no-unnecessary-type-constraint": "error",
				"@typescript-eslint/no-unsafe-argument": "error",
				"@typescript-eslint/non-nullable-type-assertion-style": "error",
				"@typescript-eslint/prefer-return-this-type": "error",
				"@typescript-eslint/sort-type-union-intersection-members": "error",
				*/

			},
		},
	],
};