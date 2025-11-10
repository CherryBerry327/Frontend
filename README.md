# SmartShield Frontend

AI 기반 실시간 위험 감지 시스템 **SmartShield**의 웹 프론트엔드입니다.  
React + Vite 환경으로 구성되어 있습니다.

---

## 핵심 기능

- **홈 화면**: 서비스 소개 및 기본 페이지 구성 (`home.jsx`)
- **회원가입 페이지**: 사용자 입력 폼 및 검증 로직 (`register.jsx`)
- **SPA 구조**: `index.html` + `main.jsx`를 통한 단일 진입점 구성
- **정적 리소스 관리**: `image_file/` 폴더를 통한 이미지 관리
- **Vite 기반 빌드 및 번들링**

---

## 기술 스택

| 구분 | 기술 |
|------|------|
| **Framework** | React |
| **Build Tool** | Vite |
| **Language** | JavaScript (ES Modules) |
| **Styling** | CSS (`app.css`) |
| **Static Resource** | Image Assets (`image_file/`) |
| **Output** | Production Build (`dist/`) |

---

## TODO

- [ ] `react-router-dom` 기반 페이지 라우팅 구조화  
- [ ] 회원가입/로그인 API 연동   
- [ ] 로딩 및 에러 상태 UI 컴포넌트화  
- [ ] `.env` 기반 환경 변수 관리 (API 주소 등)
