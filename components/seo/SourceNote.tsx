// components/seo/SourceNote.tsx
// Small "Official source" line under a topic page heading. Citing the primary
// law helps readers verify facts and helps search and AI engines trust the page.
import { FileText } from "lucide-react";
import { OFFICIAL_SOURCES } from "@/lib/seo";

export function SourceNote({ section }: { section?: string }) {
  return (
    <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400">
      <FileText className="w-4 h-4 text-cyan-400" aria-hidden="true" />
      <span>Official source{section ? ` (${section})` : ""}:</span>
      <a
        href={OFFICIAL_SOURCES.act.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
      >
        {OFFICIAL_SOURCES.act.label}
      </a>
      <span aria-hidden="true">·</span>
      <a
        href={OFFICIAL_SOURCES.rules.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 underline underline-offset-2 hover:text-cyan-300"
      >
        {OFFICIAL_SOURCES.rules.label}
      </a>
    </p>
  );
}
