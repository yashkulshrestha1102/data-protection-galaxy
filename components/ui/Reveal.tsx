"use client";

// components/ui/Reveal.tsx
// Scroll-reveal helpers built on framer-motion (already in your project).
//
//   <Reveal>...</Reveal>                         fade + rise when it enters the screen
//   <Reveal direction="left" delay={0.1}>        slide in from the left
//   <Stagger> <StaggerItem/> <StaggerItem/> </Stagger>   cards appear one after another
//
// Respects prefers-reduced-motion. Plays once (no re-animating on scroll back).

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

const EASE = [0.22, 1, 0.36, 1] as const;

function offsetFor(direction: Direction, distance: number) {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  direction?: Direction;
  once?: boolean;
  /** 0 to 1: how much of the block must be visible before it plays */
  amount?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  distance = 28,
  direction = "up",
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const { x, y } = offsetFor(direction, distance);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount, margin: "0px 0px -6% 0px" }}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

// ---------- Stagger (for grids of cards) ----------

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** seconds between each child */
  gap?: number;
  delay?: number;
  amount?: number;
}

export function Stagger({
  children,
  className,
  gap = 0.08,
  delay = 0,
  amount = 0.15,
}: StaggerProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  distance = 24,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const item: Variants = {
    hidden: { opacity: 0, y: distance },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
