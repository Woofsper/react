# 멍스퍼(Woof-Sper) 실행 전략 블루프린트 (BLUEPRINT.md)

이 문서는 `input/PRD.md`의 요구사항을 기반으로 작성되었으며, '멍스퍼' 프로젝트의 모든 개발 결정과 실행 전략의 근거가 됩니다. 

> [!IMPORTANT]
> **Context 유지 규칙**: 만약 개발 중 컨텍스트가 압축되거나 기억이 흐려질 경우, 반드시 이 문서를 최우선으로 다시 읽고 작업을 재개해야 합니다.
> **진행 상황 업데이트**: 개발 진행에 따라 완료된 항목은 `[x]`로 표시하고, 현재 진행 단계를 실시간으로 업데이트합니다.

---

## 1. 프로젝트 개요 및 아키텍처 (Project Overview)

### 기술 스택 (Tech Stack)
- **Frontend**: Vite + React.js + TailwindCSS
- **AI Engine**: Google Antigravity (Gemini API - Multimodal 분석)
- **Backend/Infra**: Firebase (Hosting, Auth, Firestore, Storage)
- **Mobile**: Capacitor (Android 변환 대응)

### 데이터 흐름 (Data Flow)
1. **입력**: 사용자가 영상/음성/사진 업로드.
2. **처리**: Firebase SDK를 통해 실시간 데이터베이스(Realtime Database) 연동.
3. **저장**: Firebase Storage 및 Realtime Database에 데이터 저장.
4. **출력**: 강아지 1인칭 시점의 친근한 번역 메시지 출력.

---

## 2. 상세 컴포넌트 설계 (Component Architecture)

| 컴포넌트명 | 역할 | 주요 Props / State |
| :--- | :--- | :--- |
| **Layout** | 서비스의 공통 레이아웃 (헤더, 네비게이션 포함) | `children` |
| **FakeLogin** | 가상 인증 시스템 (원클릭 입장) | `onLogin` |
| **UploadSection** | 미디어(영상/음성) 드래그 앤 드롭 업로드 UI | `onUploadStart`, `onUploadEnd` |
| **AnalysisLoading** | AI 분석 중임을 알리는 애니메이션 컴포넌트 | `statusMessage` |
| **AnalysisResult** | 분석 결과(번역 메시지, 권장 대응) 카드 UI | `resultData`, `onReset` |
| **HistoryList** | 과거 분석 기록의 리스트 | `logs` |
| **HistoryCard** | 개별 분석 기록 요약 카드 | `logItem` |
| **PetProfileForm** | 반려견 정보(이름, 견종 등) 입력 폼 | `petData`, `onSave` |

---

### Step 1: 환경 설정 및 기초 UI (현재 단계: 완료)
- [x] Vite + React + TailwindCSS 환경 구성
- [x] 브랜드 컬러 및 디자인 시스템 적용
- [x] 가상 로그인 시스템 구현

### Step 2: Firebase 인프라 구축 (진행 중)
- [ ] 'Woofsper' 프로젝트 생성 (Firebase MCP 활용)
- [ ] 'Woofsper-web' 웹 앱 생성 및 Hosting 활성화
- [ ] Realtime Database (asia-northeast3) 생성 (테스트 모드)
- [ ] Firebase Config 정보 획득 및 프로젝트 적용

### Step 3: 실시간 데이터베이스(RTDB) 연동 및 마이그레이션
- [ ] Firebase SDK 설치 및 초기화 (`src/firebase.js`)
- [ ] LocalStorage 및 현재 샘플 데이터를 RTDB로 마이그레이션
- [ ] `Home.jsx`, `History.jsx` 등에서 Firebase SDK 사용하도록 코드 수정

### Step 4: 멀티모달 분석 인터페이스 고도화
- [ ] 영상/음성 파일 업로드 UI 고도화
- [ ] 1인칭 시점의 번역 결과 출력 페이지 구현

### Step 5: Firebase 배포 및 검증
- [ ] `firebase init hosting` 설정 확인
- [ ] 최종 웹 빌드 및 `firebase deploy` 실행
- [ ] 배포 URL 브라우저 확인 및 검증

---

## 4. 데이터 스키마 및 상태 관리 (Data Schema)

### PetProfile (반려견 정보)
```json
{
  "name": "string",
  "breed": "string",
  "age": "number",
  "gender": "string",
  "traits": "string[]"
}
```

### TranslationResult (번역 결과)
```json
{
  "id": "uuid",
  "mediaUrl": "url_string",
  "mediaType": "video | audio | image",
  "translatedText": "string (1인칭 대화체)",
  "emotionTag": "joy | anxiety | hunger | etc",
  "behaviorAnalysis": "string (카밍 시그널 근거)",
  "timestamp": "ISOString"
}
```

---

## 5. 예외 처리 및 디버깅 가이드

- **미디어 파일 로드 실패 시**: `input/sample-contents`를 찾을 수 없는 경우, 사전에 정의된 `proc` 기본 데이터셋을 즉시 로드하여 UI가 깨지지 않도록 함.
- **AI 응답 지연**: 10초 이상 지연 시 "우리 아이의 마음을 꼼꼼히 읽고 있어요!"라는 추가 메시지 노출 및 재시도 버튼 제공.
- **분석 결과 불일치**: 생성된 번역 결과가 카밍 시그널 이론과 상충할 경우를 대비해 '스스로 검토(Self-Review)' 로직 프롬프트 포함.
