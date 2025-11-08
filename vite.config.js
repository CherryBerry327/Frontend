import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite 기본 설정: React 플러그인을 활성화해 JSX와 HMR을 지원합니다.
export default defineConfig({
  plugins: [react()],
});
