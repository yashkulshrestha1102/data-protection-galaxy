"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "./Button";

interface BackButtonProps {
  to?: "/" | "/galaxy";
  label?: string;
}

export const BackButton = ({ to = "/galaxy", label = "Back to Galaxy" }: BackButtonProps) => {
  const router = useRouter();

  return (
    <Button variant="ghost" onClick={() => router.push(to)} className="gap-2">
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Button>
  );
};