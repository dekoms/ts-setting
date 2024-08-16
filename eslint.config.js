import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  extends: [
    'airbnb', // Airbnb 기본 설정
    'airbnb-typescript', // Airbnb의 TypeScript 지원 설정
    'plugin:prettier/recommended', // Prettier와 충돌하는 ESLint 규칙을 비활성화
  ],
  files: ['src/**/*.{ts,tsx}'], // 모든 하위 디렉토리의 .ts, .tsx 파일 대상
  ignorePatterns: ['dist/', 'node_modules/'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
  plugins: {
    // Airbnb 관련 플러그인들은 자동으로 포함됨
  },
  rules: {
    // 여기에서 Airbnb 규칙을 필요에 따라 덮어쓸 수 있습니다.
  },
});