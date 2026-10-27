// components/ui/ConsentCheckbox.tsx
"use client";

import { Info } from "lucide-react";

interface ConsentCheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
  variant?: "light" | "dark";
  className?: string;
}

export function ConsentCheckbox({
  id,
  checked,
  onChange,
  error,
  variant = "dark",
  className = "",
}: ConsentCheckboxProps) {
  const isLight = variant === "light";

  return (
    <div className={className}>
      <div className="flex items-start gap-2">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          aria-required="true"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border transition-all ${
            error
              ? "border-red-500"
              : isLight
              ? "border-gray-300 accent-purple-600"
              : "border-white/30 accent-purple-500"
          }`}
        />
        <label
          htmlFor={id}
          className={`cursor-pointer text-xs leading-relaxed ${
            isLight ? "text-gray-600" : "text-white/60"
          }`}
        >
          I have read and agree to the{" "}
          <a
            href="/consent-notice"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 underline hover:text-purple-300"
          >
            Consent Notice
          </a>{" "}
          and{" "}
          <a
            href="/privacy-policy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-400 underline hover:text-purple-300"
          >
            Privacy Policy
          </a>
          . I consent to being contacted by Legal Galaxy regarding my request.{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="ml-6 mt-1 flex items-center gap-1 text-xs text-red-400"
          role="alert"
        >
          <Info className="h-3 w-3" />
          {error}
        </p>
      )}
    </div>
  );
}