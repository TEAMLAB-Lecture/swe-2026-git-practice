// data/teams.js의 window.TEAMS를 읽어 팀 카드를 그린다.
const grid = document.getElementById("teams");
const search = document.getElementById("search");
const count = document.getElementById("count");

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function memberItem(member) {
  const li = el("li", "member");
  li.append(el("strong", "member-name", member.name));
  if (member.role) li.append(el("span", "member-role", member.role));
  if (member.github) {
    const link = el("a", "member-github", "@" + member.github);
    link.href = "https://github.com/" + member.github;
    link.target = "_blank";
    link.rel = "noopener";
    li.append(link);
  }
  if (member.hello) li.append(el("p", "member-hello", member.hello));
  return li;
}

function teamCard(team) {
  const card = el("article", "card");
  card.append(el("h2", "team-name", team.name));
  if (team.motto) card.append(el("p", "team-motto", team.motto));

  const list = el("ul", "members");
  const members = team.members || [];
  if (members.length === 0) {
    list.append(el("li", "member empty", "아직 팀원이 없습니다. PR을 보내 주세요."));
  }
  members.forEach((m) => list.append(memberItem(m)));
  card.append(list);
  return card;
}

function matches(team, keyword) {
  if (!keyword) return true;
  const people = (team.members || []).map((m) => `${m.name} ${m.github || ""}`);
  return [team.name, team.motto, ...people].join(" ").toLowerCase().includes(keyword);
}

function render() {
  const keyword = search.value.trim().toLowerCase();
  const teams = (window.TEAMS || []).filter((t) => matches(t, keyword));
  grid.replaceChildren(...teams.map(teamCard));
  const people = teams.reduce((sum, t) => sum + (t.members || []).length, 0);
  count.textContent = `팀 ${teams.length}개 · 팀원 ${people}명`;
}

search.addEventListener("input", render);
render();
