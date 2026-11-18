import { components, revision, source } from "./components.js";

const find = (id) => document.getElementById(id);
const search = find("search");
const revisionLink = find("revision-link");
revisionLink.textContent = revision.slice(0, 7);
revisionLink.href = `https://github.com/dakewamama/velon/commit/${revision}`;

let selected =
  components.find((component) => `#${component.id}` === location.hash) ??
  components[0];

function renderIndex() {
  const query = search.value.trim().toLocaleLowerCase();
  const visible = components.filter((component) =>
    [
      component.name,
      component.category,
      component.summary,
      component.description,
      component.keywords,
    ]
      .join(" ")
      .toLocaleLowerCase()
      .includes(query),
  );
  find("result-count").textContent =
    `${visible.length} of ${components.length} components`;
  find("empty").hidden = visible.length !== 0;
  find("components").replaceChildren(
    ...visible.map((component) => {
      const button = document.createElement("button");
      button.type = "button";
      button.setAttribute("aria-pressed", String(component.id === selected.id));
      const name = document.createElement("strong");
      name.textContent = component.name;
      const summary = document.createElement("span");
      summary.textContent = component.summary;
      button.append(name, summary);
      button.addEventListener("click", () => select(component.id));
      return button;
    }),
  );
}

function renderDetail() {
  for (const key of ["category", "description", "input", "output", "boundary"])
    find(key).textContent = selected[key];
  find("component-name").textContent = selected.name;
  find("source-path").textContent = selected.path;
  find("source-link").href = `${source}/${selected.path}`;
  find("contract-link").href =
    `${source.replace("/tree/", "/blob/")}/${selected.contract}`;
  find("related").replaceChildren(
    ...selected.related.map((id) => {
      const component = components.find((item) => item.id === id);
      const link = document.createElement("a");
      link.href = `#${id}`;
      link.textContent = `${component.name} →`;
      return link;
    }),
  );
}

function select(id) {
  const component = components.find((item) => item.id === id);
  if (!component) return;
  selected = component;
  if (location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
  renderIndex();
  renderDetail();
}

search.addEventListener("input", renderIndex);
window.addEventListener("hashchange", () => select(location.hash.slice(1)));
window.addEventListener("popstate", () =>
  select(location.hash.slice(1) || components[0].id),
);
renderIndex();
renderDetail();
