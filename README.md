# SWE 2026 Git 실습: 팀 갤러리

국립부경대학교 소프트웨어공학(2026학년도 2학기) 3주차 실습 저장소입니다.
팀마다 이 저장소를 fork하고, 팀원은 PR로 자기 소개를 올리고, 팀 리더가 병합한 결과를 이 저장소로 다시 PR 보냅니다.

- 마감: **2026년 9월 21일(월) 23:59** (LMS 기한)
- 형태: 3인 1팀 (13명이라 한 팀은 4명)
- 안내문: LMS의 「3주차 실습과제 안내문」, 강의노트 03 제9장

## 실행

설치할 것이 없습니다. `index.html`을 브라우저로 열면 됩니다.

## 구조

| 파일 | 역할 |
|---|---|
| `index.html` | 페이지 뼈대 |
| `style.css` | 디자인 |
| `app.js` | `data/teams.js`를 읽어 팀 카드를 그리고, 검색을 처리 |
| `data/teams.js` | 팀과 팀원 목록. **각 팀은 자기 팀 블록만 고칩니다** |
| `.github/pull_request_template.md` | PR을 열 때 채울 설명 양식 |

## 1. 팀 등록 (LMS 댓글)

팀 리더가 LMS의 「3주차 실습과제 팀 등록」 글에 팀별로 댓글 하나를 답니다. **댓글 순서대로 1팀~4팀**이 되고, 이 번호가 `data/teams.js`에서 여러분 팀이 쓸 블록입니다.

```text
[팀 등록]
팀 이름: (자유롭게)
팀 리더: 홍길동 (GitHub ID: gildong)
팀원: 김철수 (GitHub ID: chulsoo), 이영희 (GitHub ID: younghee)
팀 저장소: https://github.com/gildong/swe-2026-git-practice
최종 PR: (PR을 보낸 뒤 추가)
```

## 2. 진행 순서

### ① 팀 리더: 저장소 준비

1. 이 페이지 오른쪽 위의 **Fork**를 눌러 내 계정에 팀 저장소를 만듭니다.
2. 팀 저장소의 **Settings → Collaborators**에서 팀원을 초대합니다.
3. 팀 저장소의 초록색 **Code** 버튼 → **HTTPS** 탭의 주소로 clone합니다. (SSH 주소는 SSH 키를 등록한 사람만 쓸 수 있습니다.)
4. Claude Code로 코드베이스를 파악해 `CODEBASE.md`에 자기 말로 정리합니다.
5. `data/teams.js`의 자기 팀 블록에서 `name`과 `motto`를 고칩니다.

```bash
git clone https://github.com/gildong/swe-2026-git-practice.git
cd swe-2026-git-practice
git add CODEBASE.md data/teams.js
git commit -m "코드베이스 설명 추가, 1팀 이름과 모토 작성"
git push
```

### ② 팀원: 브랜치에서 작업하고 팀 저장소로 PR

1. 초대 메일(또는 GitHub 알림)에서 초대를 수락하고 팀 저장소를 clone합니다.
2. 브랜치를 만들어 자기 팀 블록의 `members`에 자기 정보를 한 줄 추가합니다.
3. 브랜치를 push하고 **팀 저장소의 main**으로 PR을 엽니다. 설명은 양식(무엇을 · 왜 · 확인 방법)에 맞춰 씁니다.

```bash
git clone https://github.com/gildong/swe-2026-git-practice.git
cd swe-2026-git-practice
git switch -c add-chulsoo
git add data/teams.js
git commit -m "1팀에 김철수 소개 추가"
git push -u origin add-chulsoo
```

> **PR을 열 대상 확인**: fork한 저장소에서 PR을 만들면 GitHub이 base를 이 저장소(`TEAMLAB-Lecture`)로 잡을 때가 있습니다. 팀원의 PR은 **base repository가 팀 저장소**인지 꼭 확인합니다.

### ③ 팀 리더: 리뷰하고 병합

1. 팀원 PR의 **Files changed**를 보고, 고칠 점이 있으면 코멘트를 남깁니다. 코멘트를 하나 이상 주고받아 보세요.
2. 문제가 없으면 **Merge pull request**로 병합합니다. 충돌이 나면 해결합니다.

### ④ 팀 리더: 이 저장소로 최종 PR

1. 팀 저장소 화면에서 **Contribute → Open pull request**를 누릅니다.
2. base는 `TEAMLAB-Lecture/swe-2026-git-practice`의 `main`, compare는 팀 저장소의 `main`인지 확인합니다.
3. PR 제목은 `[1팀] 3주차 실습`처럼 팀 번호로 시작합니다.
4. LMS 팀 등록 댓글에 PR 주소를 덧붙입니다.

## 3. 확인 목록

- [ ] 팀원 모두 자기 브랜치에서 PR을 한 번 이상 열었다.
- [ ] PR마다 설명(무엇을 · 왜 · 확인 방법)이 채워져 있다.
- [ ] 리더가 팀원 PR을 리뷰하고 병합했다.
- [ ] `data/teams.js`에서 우리 팀 블록만 고쳤다.
- [ ] 비밀번호, 전화번호 같은 개인 정보가 들어가지 않았다.
- [ ] 9월 21일(월)까지 이 저장소로 최종 PR을 열고 LMS 댓글에 주소를 적었다.

## 막히면 Claude Code에게 이렇게 시킨다

- 이 저장소의 파일 구조와 실행 방법을 파악해서 CODEBASE.md로 정리해 줘.
- add-chulsoo 브랜치를 만들고 data/teams.js의 1팀 members에 내 정보를 추가한 다음, 커밋하고 push해 줘.
- PR 두 개가 같은 줄을 고쳐서 충돌이 났어. 두 사람 정보가 모두 남도록 해결해 줘.
