[PRD.md] 강아지 AI 번역기: 멍스퍼(Woof-Sper) 기획서
1. AI 명령지침 (Core Rules)
멀티모달 분석: 강아지의 영상, 사진, 녹음 데이터를 통합적으로 분석하여 감정 상태를 추론할 것.
의인화된 공감: 딱딱한 분석 결과보다는 강아지가 직접 말하는 듯한 친근하고 따뜻한 톤앤매너를 유지할 것.
단계적 구현: 유저의 요청에 따라 프론트엔드 테스트 → 로컬 데이터 활용 → Firebase 연동 순으로 확장할 것.
자기 검토: 생성된 번역 결과가 강아지의 신체 언어(카밍 시그널) 이론에 근거하는지 스스로 검토할 것.

2. 기술 환경 및 개발 도구 (Development Settings)
Core Engine: Google Antigravity (Gemini API - Video/Audio/Image Multimodal)
Frontend: vite + react(js) + tailwindcss
Storage (Initial): Browser LocalStorage & SessionStorage
Backend/Infra: Firebase (Authentication, Firestore, Storage, Hosting)

3. 단계별 개발 로드맵 (Development Stages)
1단계 (Prototype): Vite+React 기반 UI 구현. LocalStorage를 활용한 가상 데이터 저장 및 분석 결과 화면 테스트.
2단계 (Integration): Firebase SDK 연결. 실제 영상/음성 파일을 업로드하고 Firebase Storage에 저장하는 기능 구현.
3단계 (AI Intelligence): Antigravity API 연동. 업로드된 미디어를 분석하여 실제 번역 메시지 생성.

4. 제품 정의 (Product Goal)
목적: 반려견의 행동 언어(Body Language)와 소리를 AI로 분석하여 보호자와의 정서적 유대감을 강화.

5. 핵심 기능 정의 (Core Features)
미디어 업로드, AI 번역 피드, 행동 로그, 로그인 기능 구현.

6. 사용자 경험 설계 (User Flow)
로그인 -> 업로드 -> 분석 애니메이션 -> 결과 확인 -> 히스토리 관리.

7. 디자인 시스템 (Visual Style)
Concept: Warm, Friendly, Organic.
Color: Yellow-400, Orange-500, Stone-100.
Component: TailwindCSS, Rounded-2xl.
