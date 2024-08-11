import js from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    'airbnb', // Airbnb 기본 설정
    'airbnb-typescript', // Airbnb의 TypeScript 지원 설정
    js.configs.recommended,
    ...tseslint.configs.recommended,
    'plugin:prettier/recommended', // Prettier와 충돌하는 ESLint 규칙을 비활성화
    prettierConfig, // eslint-config-prettier를 사용하여 Prettier와 충돌하는 규칙 비활성화
  ],
  files: ['*/.{ts,tsx}'], // 모든 하위 디렉토리의 .ts, .tsx 파일 대상
  ignores: ['dist'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier: prettier, // Prettier 플러그인 추가
    // Airbnb 관련 플러그인들은 자동으로 포함됨
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'warn', // Prettier 규칙을 ESLint 규칙으로 추가
    // 여기에서 Airbnb 규칙을 필요에 따라 덮어쓸 수 있습니다.
  },
});
