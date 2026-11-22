import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionCardProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export const SectionCard = ({
  title,
  description,
  children,
  className,
}: SectionCardProps) => {
  return (
    <div className={cn("max-w-4xl mx-auto px-4 py-12", className)}>
      <div className="glass-sea reveal-on-scroll relative rounded-2xl p-8 md:p-12 shadow-2xl shadow-cyan-400/5">
        <h1 className="text-gradient-sea text-4xl md:text-5xl font-bold mb-4">
          {title}
        </h1>

        {description && (
          <p className="text-lg text-gray-300 mb-8">{description}</p>
        )}

        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
}
