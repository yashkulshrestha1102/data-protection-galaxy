import {
  Shield, Globe, Users, Building, Database, Scale, BookOpen, FileText,
  type LucideIcon,
} from "lucide-react";

const guideIconMap: Record<string, LucideIcon> = {
  Shield, Globe, Users, Building, Database, Scale, BookOpen, FileText,
};

export const getGuideIcon = (name: string): LucideIcon =>
  guideIconMap[name] ?? Shield;