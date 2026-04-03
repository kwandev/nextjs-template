<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# 커밋 컨벤션

Conventional Commits prefix를 반드시 사용하고, 제목과 본문은 한국어로 작성한다.

- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 formatting, 세미콜론 누락 등 코드 변경이 없는 경우
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가/수정
- `chore`: 빌드 업무 수정, 패키지 매니저 수정

형식: `type: 한국어 제목`

# 패키지 매니저

**pnpm**만 사용한다. npm, yarn 사용 금지.

- 패키지 설치: `pnpm add` / `pnpm add -D`
- 스크립트 실행: `pnpm run` 또는 `pnpm <script>`

# 코드 품질 도구

- **Formatter**: oxfmt (설정: `.oxfmtrc.json`) — `pnpm format` / `pnpm format:check`
- **Linter**: oxlint (설정: `.oxlintrc.json`) — `pnpm lint`

코드 작성/수정 후 반드시 format과 lint 검사를 통과해야 한다.

- **Pre-commit Hook**: husky + lint-staged로 커밋 시 자동 실행
  - JS/TS 파일: `oxfmt --write` + `oxlint`
  - CSS/MD/JSON 파일: `oxfmt --write`
