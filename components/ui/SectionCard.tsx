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
      {/* Glowing background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-purple-500/5">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
          {title}
        </h1>
        
        {description && (
          <p className="text-lg text-gray-300 mb-8">{description}</p>
        )}

        <div className="space-y-4">{children}</div>
      </div>
    </div>
  );
};