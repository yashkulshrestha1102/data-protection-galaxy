// data/guide-content/html.ts
// Tiny helpers for writing guide HTML. Styling comes from the scoped
// `.lg-article` stylesheet in app/resources/guides/[slug]/guide-article.css.

/** Numbered citation that jumps to the matching entry in "Sources & References". */
export const cite = (...nums: number[]) =>
  nums
    .map(
      (n) =>
        `<sup class="lg-cite"><a href="#src-${n}" aria-label="Source ${n}">[${n}]</a></sup>`
    )
    .join("");

/** Highlighted note box. kind: info | tip | warn | key */
export const callout = (kind: "info" | "tip" | "warn" | "key", title: string, body: string) =>
  `<aside class="lg-callout lg-callout--${kind}"><p class="lg-callout-title">${title}</p>${body}</aside>`;

/** Responsive table wrapper. */
export const table = (head: string[], rows: string[][], caption?: string) =>
  `<div class="lg-table-wrap"><table>${
    caption ? `<caption>${caption}</caption>` : ""
  }<thead><tr>${head.map((h) => `<th scope="col">${h}</th>`).join("")}</tr></thead><tbody>${rows
    .map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join("")}</tr>`)
    .join("")}</tbody></table></div>`;

/** Checklist with tick markers. */
export const checklist = (items: string[]) =>
  `<ul class="lg-checklist">${items.map((i) => `<li>${i}</li>`).join("")}</ul>`;

/** Numbered step list with large counters. */
export const steps = (items: { title: string; body: string }[]) =>
  `<ol class="lg-steps">${items
    .map((s) => `<li><p class="lg-step-title">${s.title}</p><p>${s.body}</p></li>`)
    .join("")}</ol>`;

/** Rough reading time at ~200 words per minute. */
export const readTimeOf = (html: string) => {
  const words = html.replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
  return `${Math.max(3, Math.round(words / 200))} min read`;
};
