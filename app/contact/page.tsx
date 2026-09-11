"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Target,
  Zap,
} from "lucide-react";

const COLORS = {
  purple: "#A855F7",
  pink: "#EC4899",
  yellow: "#FFEA93",
  mint: "#B0CDE6",
  blue: "#000000",
};

const INTERESTS = [
  "DPDP Compliance",
  "GDPR Compliance",
  "AI Governance",
  "Privacy Policy",
  "DPIA & Audits",
  "Training & Awareness",
  "Certification Support",
  "Something Else",
];

const PARTICLES = [
  [42, 74, 2],
  [78, 128, 1.5],
  [116, 66, 1.8],
  [151, 112, 1.4],
  [184, 55, 2],
  [221, 92, 1.4],
  [275, 56, 1.7],
  [314, 88, 2],
  [352, 52, 1.5],
  [391, 108, 1.8],
  [426, 72, 1.4],
  [458, 135, 2],
  [55, 192, 1.5],
  [94, 224, 2],
  [136, 177, 1.4],
  [372, 188, 1.6],
  [417, 226, 2],
  [455, 192, 1.5],
  [61, 344, 1.8],
  [108, 397, 1.4],
  [405, 371, 1.8],
  [449, 330, 1.5],
  [75, 465, 2],
  [132, 512, 1.5],
  [378, 505, 1.7],
  [431, 461, 2],
];

const SPARKS = [
  [62, 155, 84, 146],
  [112, 274, 132, 282],
  [386, 154, 411, 146],
  [430, 273, 450, 263],
  [78, 381, 99, 370],
  [405, 404, 428, 416],
  [153, 488, 170, 477],
  [329, 491, 350, 502],
];

const faqs = [
  {
    q: "What can Legal Galaxy help us with?",
    a: "We help organizations operationalize privacy and AI governance through DPDP and GDPR compliance, privacy policies, DPIAs, audits, training, governance frameworks, and certification support.",
  },
  {
    q: "Is this suitable for startups as well as enterprises?",
    a: "Yes. The engagement can be structured around your organization's current maturity, data footprint, team size, regulatory exposure, and immediate compliance priorities.",
  },
  {
    q: "Can you help with AI governance?",
    a: "Yes. AI governance can cover AI inventories, risk assessment, governance controls, responsible AI practices, documentation, accountability structures, and operational workflows.",
  },
  {
    q: "How quickly can we start?",
    a: "Once we understand your requirement, we can recommend the appropriate next step and scope. For urgent requirements, mention the timeline in the message field.",
  },
];

function PrivacyGuardian() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-[560px] overflow-hidden rounded-[2.5rem] border border-[#B0CDE6]/30 bg-[#000000] shadow-[0_30px_100px_rgba(77,103,135,0.45)]">
      <style>{`
        .guardian-scene {
          background:
            radial-gradient(
              circle at 50% 35%,
              rgba(176, 205, 230, 0.22),
              transparent 27%
            ),
            radial-gradient(
              circle at 50% 70%,
              rgba(168, 85, 247, 0.18),
              transparent 30%
            ),
            radial-gradient(
              circle at 50% 78%,
              rgba(236, 72, 153, 0.12),
              transparent 34%
            ),
            linear-gradient(
              145deg,
              #000000 0%,
              #000000 58%,
              #B0CDE6 180%
            );
        }

        .guardian-grid {
          background-image:
            linear-gradient(
              rgba(255, 234, 147, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 234, 147, 0.06) 1px,
              transparent 1px
            );

          background-size: 34px 34px;

          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 18%,
            black 80%,
            transparent
          );
        }

        .guardian-ring {
          transform-box: fill-box;
          transform-origin: center;
        }

        .guardian-ring-a {
          animation: ringSpin 16s linear infinite;
        }

        .guardian-ring-b {
          animation: ringSpinReverse 11s linear infinite;
        }

        .guardian-ring-c {
          animation: ringPulse 4s ease-in-out infinite;
        }

        .guardian-core {
          animation: corePulse 2.4s ease-in-out infinite;
        }

        .guardian-core-inner {
          animation: coreInner 1.8s ease-in-out infinite;
        }

        .guardian-eye {
          animation: eyePulse 2s ease-in-out infinite;
        }

        .guardian-eye:nth-child(2) {
          animation-delay: 0.15s;
        }

        .guardian-circuit {
          stroke-dasharray: 8 7;
          animation: circuitFlow 2.8s linear infinite;
        }

        .guardian-scan {
          animation: scanMove 3.8s ease-in-out infinite;
        }

        .guardian-data {
          animation: dataFall 2.8s linear infinite;
        }

        .guardian-data:nth-child(2) {
          animation-delay: 0.8s;
        }

        .guardian-data:nth-child(3) {
          animation-delay: 1.5s;
        }

        .guardian-data:nth-child(4) {
          animation-delay: 2.1s;
        }

        .guardian-particles circle {
          animation: particleFloat 3.2s ease-in-out infinite;
        }

        .guardian-particles circle:nth-child(2n) {
          animation-delay: 0.5s;
        }

        .guardian-particles circle:nth-child(3n) {
          animation-delay: 1.1s;
        }

        .guardian-particles circle:nth-child(4n) {
          animation-delay: 1.7s;
        }

        .guardian-sparks line {
          stroke-dasharray: 20;
          animation: sparkFlash 2.7s ease-in-out infinite;
        }

        .guardian-sparks line:nth-child(2n) {
          animation-delay: 0.8s;
        }

        .guardian-sparks line:nth-child(3n) {
          animation-delay: 1.5s;
        }

        .guardian-breath {
          animation: bodyBreath 4s ease-in-out infinite;
          transform-origin: center;
        }

        @keyframes ringSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes ringSpinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes ringPulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.96);
          }

          50% {
            opacity: 0.65;
            transform: scale(1.02);
          }
        }

        @keyframes corePulse {
          0%,
          100% {
            opacity: 0.55;
            transform: scale(0.92);
          }

          50% {
            opacity: 1;
            transform: scale(1.06);
          }
        }

        @keyframes coreInner {
          0%,
          100% {
            opacity: 0.7;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes eyePulse {
          0%,
          100% {
            opacity: 0.5;
          }

          50% {
            opacity: 1;
          }
        }

        @keyframes circuitFlow {
          to {
            stroke-dashoffset: -30;
          }
        }

        @keyframes scanMove {
          0%,
          100% {
            transform: translateY(-180px);
            opacity: 0;
          }

          15% {
            opacity: 0.9;
          }

          50% {
            opacity: 0.75;
          }

          85% {
            opacity: 0.9;
          }
        }

        @keyframes dataFall {
          0% {
            transform: translateY(-35px);
            opacity: 0;
          }

          15% {
            opacity: 0.7;
          }

          75% {
            opacity: 0.5;
          }

          100% {
            transform: translateY(330px);
            opacity: 0;
          }
        }

        @keyframes particleFloat {
          0%,
          100% {
            opacity: 0.15;
            transform: translateY(0) scale(0.8);
          }

          50% {
            opacity: 0.9;
            transform: translateY(-7px) scale(1.2);
          }
        }

        @keyframes sparkFlash {
          0%,
          100% {
            opacity: 0.08;
          }

          45% {
            opacity: 0.9;
          }

          55% {
            opacity: 0.2;
          }
        }

        @keyframes bodyBreath {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>

      <div className="guardian-scene absolute inset-0" />

      <div className="guardian-grid absolute inset-0 opacity-80" />

      <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-[#B0CDE6]/40 bg-[#000000]/70 px-3 py-1.5 backdrop-blur-md">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#B0CDE6]" />

        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#FFEA93]">
          Guardian online
        </span>
      </div>

      <div className="absolute right-6 top-6 z-20 rounded-full border border-purple-500/40 bg-[#000000]/70 px-3 py-1.5 backdrop-blur-md">
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-mono text-[10px] uppercase tracking-[0.2em] text-transparent">
          Privacy / AI
        </span>
      </div>

      <svg
        viewBox="0 0 500 620"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="guardianCoreGradient">
            <stop
              offset="0%"
              stopColor="#FFEA93"
              stopOpacity="1"
            />

            <stop
              offset="35%"
              stopColor="#B0CDE6"
              stopOpacity="0.9"
            />

            <stop
              offset="100%"
              stopColor="#A855F7"
              stopOpacity="0"
            />
          </radialGradient>

          <linearGradient
            id="guardianAccentGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop offset="0%" stopColor="#A855F7" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>

          <linearGradient
            id="bodyGradient"
            x1="0"
            x2="1"
          >
            <stop
              offset="0%"
              stopColor="#000000"
            />

            <stop
              offset="45%"
              stopColor="#B0CDE6"
              stopOpacity="0.38"
            />

            <stop
              offset="100%"
              stopColor="#000000"
            />
          </linearGradient>

          <linearGradient
            id="circuitGradient"
            x1="0"
            x2="1"
          >
            <stop
              offset="0%"
              stopColor="#A855F7"
            />

            <stop
              offset="50%"
              stopColor="#EC4899"
            />

            <stop
              offset="100%"
              stopColor="#B0CDE6"
            />
          </linearGradient>

          <filter id="softGlow">
            <feGaussianBlur
              stdDeviation="5"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="strongGlow">
            <feGaussianBlur
              stdDeviation="9"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <clipPath id="guardianBodyClip">
            <path d="M184 260 Q250 230 316 260 L349 330 L333 475 Q300 510 250 515 Q200 510 167 475 L151 330Z" />
          </clipPath>
        </defs>

        {/* Outer protection rings */}

        <g
          fill="none"
          strokeLinecap="round"
        >
          <circle
            className="guardian-ring guardian-ring-a"
            cx="250"
            cy="306"
            r="226"
            stroke="#B0CDE6"
            strokeOpacity="0.22"
            strokeWidth="1"
            strokeDasharray="5 15"
          />

          <circle
            className="guardian-ring guardian-ring-b"
            cx="250"
            cy="306"
            r="205"
            stroke="url(#guardianAccentGradient)"
            strokeOpacity="0.38"
            strokeWidth="1.2"
            strokeDasharray="2 20"
          />

          <circle
            className="guardian-ring guardian-ring-c"
            cx="250"
            cy="306"
            r="184"
            stroke="#FFEA93"
            strokeOpacity="0.18"
            strokeWidth="1"
          />

          <path
            d="M84 306 A166 166 0 0 1 416 306"
            stroke="#FFEA93"
            strokeOpacity="0.4"
            strokeWidth="2"
            strokeDasharray="45 16"
          />

          <path
            d="M106 372 A154 154 0 0 0 394 372"
            stroke="url(#guardianAccentGradient)"
            strokeOpacity="0.38"
            strokeWidth="1.5"
            strokeDasharray="30 18"
          />
        </g>

        {/* Targeting brackets */}

        <g
          fill="none"
          stroke="#FFEA93"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.55"
        >
          <path d="M83 231 V202 H112" />
          <path d="M417 231 V202 H388" />
          <path d="M83 382 V411 H112" />
          <path d="M417 382 V411 H388" />
        </g>

        {/* Data streams */}

        <g
          className="guardian-data"
          stroke="#B0CDE6"
          strokeWidth="1"
          opacity="0.45"
        >
          <path
            d="M112 150 V470"
            strokeDasharray="3 10"
          />

          <path
            d="M145 130 V495"
            strokeDasharray="2 13"
          />

          <path
            d="M355 128 V500"
            strokeDasharray="3 11"
          />

          <path
            d="M389 150 V468"
            strokeDasharray="2 12"
          />
        </g>

        {/* Data glyphs */}

        <g
          fill="#FFEA93"
          opacity="0.4"
          fontFamily="monospace"
          fontSize="8"
          letterSpacing="2"
        >
          <text x="91" y="184">
            01
          </text>

          <text x="91" y="214">
            10
          </text>

          <text x="91" y="244">
            01
          </text>

          <text x="392" y="180">
            10
          </text>

          <text x="392" y="210">
            01
          </text>

          <text x="392" y="240">
            11
          </text>

          <text x="125" y="470">
            AI
          </text>

          <text x="365" y="470">
            DPIA
          </text>
        </g>

        {/* Guardian body */}

        <g className="guardian-breath">
          {/* shoulders */}

          <path
            d="M157 320 Q128 324 103 351 L117 384 Q141 375 166 363"
            fill="url(#bodyGradient)"
            stroke="#B0CDE6"
            strokeOpacity="0.65"
            strokeWidth="2"
          />

          <path
            d="M343 320 Q372 324 397 351 L383 384 Q359 375 334 363"
            fill="url(#bodyGradient)"
            stroke="#B0CDE6"
            strokeOpacity="0.65"
            strokeWidth="2"
          />

          {/* left arm */}

          <path
            d="M125 351 Q96 382 93 431 L113 446 Q130 408 151 384"
            fill="#000000"
            stroke="url(#guardianAccentGradient)"
            strokeOpacity="0.75"
            strokeWidth="2"
          />

          {/* right arm */}

          <path
            d="M375 351 Q404 382 407 431 L387 446 Q370 408 349 384"
            fill="#000000"
            stroke="url(#guardianAccentGradient)"
            strokeOpacity="0.75"
            strokeWidth="2"
          />

          {/* forearm tech lines */}

          <g
            fill="none"
            stroke="#FFEA93"
            strokeWidth="1.5"
            strokeOpacity="0.6"
          >
            <path d="M103 391 L126 400" />
            <path d="M99 405 L121 414" />
            <path d="M397 391 L374 400" />
            <path d="M401 405 L379 414" />
          </g>

          {/* torso */}

          <path
            d="M184 260 Q250 230 316 260 L349 330 L333 475 Q300 510 250 515 Q200 510 167 475 L151 330Z"
            fill="url(#bodyGradient)"
            stroke="#B0CDE6"
            strokeWidth="2"
            strokeOpacity="0.72"
          />

          {/* torso inner armor */}

          <path
            d="M207 284 Q250 267 293 284 L312 338 L298 450 Q275 473 250 479 Q225 473 202 450 L188 338Z"
            fill="#000000"
            fillOpacity="0.9"
            stroke="#B0CDE6"
            strokeOpacity="0.35"
          />

          {/* chest circuit network */}

          <g
            className="guardian-circuit"
            fill="none"
            stroke="url(#circuitGradient)"
            strokeWidth="1.7"
          >
            <path d="M188 319 H218 L231 335 H250" />
            <path d="M312 319 H282 L269 335 H250" />
            <path d="M202 363 H229 L241 351 H250" />
            <path d="M298 363 H271 L259 351 H250" />
            <path d="M202 407 H227 L240 393 H250" />
            <path d="M298 407 H273 L260 393 H250" />
            <path d="M213 444 H237 L250 430 L263 444 H287" />
          </g>

          {/* circuit nodes */}

          <g
            fill="#FFEA93"
            filter="url(#softGlow)"
          >
            <circle cx="218" cy="319" r="3" />
            <circle cx="282" cy="319" r="3" />
            <circle cx="229" cy="363" r="2.5" />
            <circle cx="271" cy="363" r="2.5" />
            <circle cx="227" cy="407" r="2.5" />
            <circle cx="273" cy="407" r="2.5" />
            <circle cx="250" cy="430" r="3" />
          </g>

          {/* neck */}

          <path
            d="M219 259 V239 H281 V259"
            fill="#000000"
            stroke="#B0CDE6"
            strokeWidth="2"
          />

          {/* neck vents */}

          <g
            stroke="url(#guardianAccentGradient)"
            strokeWidth="2"
            opacity="0.75"
          >
            <path d="M225 247 H237" />
            <path d="M242 247 H258" />
            <path d="M263 247 H275" />
          </g>

          {/* head */}

          <path
            d="M195 126 Q250 94 305 126 L316 207 Q303 246 250 261 Q197 246 184 207Z"
            fill="#000000"
            stroke="#B0CDE6"
            strokeWidth="2.5"
          />

          {/* face plate */}

          <path
            d="M205 142 Q250 119 295 142 L301 201 Q284 230 250 239 Q216 230 199 201Z"
            fill="#000000"
            fillOpacity="0.96"
            stroke="#B0CDE6"
            strokeOpacity="0.35"
          />

          {/* forehead core */}

          <circle
            cx="250"
            cy="145"
            r="10"
            fill="url(#guardianCoreGradient)"
            className="guardian-core"
            filter="url(#strongGlow)"
          />

          <circle
            cx="250"
            cy="145"
            r="4"
            fill="#FFEA93"
            className="guardian-core-inner"
          />

          {/* eyes */}

          <g filter="url(#softGlow)">
            <path
              className="guardian-eye"
              d="M215 177 Q231 167 244 177 Q232 187 216 183Z"
              fill="url(#guardianAccentGradient)"
            />

            <path
              className="guardian-eye"
              d="M285 177 Q269 167 256 177 Q268 187 284 183Z"
              fill="url(#guardianAccentGradient)"
            />
          </g>

          {/* face sensor lines */}

          <g
            fill="none"
            stroke="#FFEA93"
            strokeWidth="1"
            opacity="0.55"
          >
            <path d="M213 196 H238" />
            <path d="M262 196 H287" />
            <path d="M221 211 H240" />
            <path d="M260 211 H279" />
          </g>

          {/* jaw */}

          <path
            d="M220 225 Q250 240 280 225"
            fill="none"
            stroke="url(#guardianAccentGradient)"
            strokeOpacity="0.6"
            strokeWidth="1.5"
          />

          {/* antenna */}

          <path
            d="M250 134 V82"
            stroke="#B0CDE6"
            strokeWidth="2"
          />

          <circle
            cx="250"
            cy="72"
            r="8"
            fill="url(#guardianAccentGradient)"
            fillOpacity="0.25"
            stroke="url(#guardianAccentGradient)"
            strokeWidth="1.5"
            filter="url(#softGlow)"
          />

          <circle
            cx="250"
            cy="72"
            r="3"
            fill="#FFEA93"
          />

          {/* side antennae */}

          <path
            d="M190 154 L167 137"
            stroke="#B0CDE6"
            strokeWidth="2"
          />

          <path
            d="M310 154 L333 137"
            stroke="#B0CDE6"
            strokeWidth="2"
          />

          <circle
            cx="163"
            cy="134"
            r="4"
            fill="#FFEA93"
          />

          <circle
            cx="337"
            cy="134"
            r="4"
            fill="#FFEA93"
          />

          {/* ear modules */}

          <rect
            x="177"
            y="169"
            width="18"
            height="42"
            rx="6"
            fill="#000000"
            stroke="url(#guardianAccentGradient)"
            strokeOpacity="0.8"
          />

          <rect
            x="305"
            y="169"
            width="18"
            height="42"
            rx="6"
            fill="#000000"
            stroke="url(#guardianAccentGradient)"
            strokeOpacity="0.8"
          />

          <g
            stroke="#FFEA93"
            strokeWidth="2"
            opacity="0.6"
          >
            <path d="M182 180 H190" />
            <path d="M182 189 H190" />
            <path d="M310 180 H318" />
            <path d="M310 189 H318" />
          </g>

          {/* privacy core housing */}

          <circle
            cx="250"
            cy="365"
            r="42"
            fill="#000000"
            stroke="url(#guardianAccentGradient)"
            strokeWidth="2"
            strokeOpacity="0.8"
          />

          <circle
            cx="250"
            cy="365"
            r="31"
            fill="url(#guardianCoreGradient)"
            className="guardian-core"
            filter="url(#strongGlow)"
          />

          <circle
            cx="250"
            cy="365"
            r="17"
            fill="#FFEA93"
            fillOpacity="0.9"
            className="guardian-core-inner"
          />

          {/* shield inside core */}

          <path
            d="M250 344 L266 351 V363 Q266 378 250 388 Q234 378 234 363 V351Z"
            fill="#000000"
            stroke="#000000"
            strokeWidth="2"
          />

          <path
            d="M243 365 L248 370 L258 359"
            fill="none"
            stroke="#FFEA93"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* scan line */}

          <rect
            className="guardian-scan"
            x="145"
            y="300"
            width="210"
            height="2"
            rx="1"
            fill="#FFEA93"
            opacity="0.7"
            filter="url(#softGlow)"
          />
        </g>

        {/* Guardian particles */}

        <g className="guardian-particles">
          {PARTICLES.map(([cx, cy, r], index) => (
            <circle
              key={`particle-${index}`}
              cx={cx}
              cy={cy}
              r={r}
              fill={
                index % 3 === 0
                  ? COLORS.pink
                  : COLORS.yellow
              }
              opacity="0.5"
            />
          ))}
        </g>

        {/* Energy sparks */}

        <g
          className="guardian-sparks"
          stroke="url(#guardianAccentGradient)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          {SPARKS.map(
            ([x1, y1, x2, y2], index) => (
              <line
                key={`spark-${index}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
              />
            )
          )}
        </g>

        {/* Bottom HUD */}

        <g transform="translate(128 545)">
          <rect
            x="0"
            y="0"
            width="244"
            height="38"
            rx="19"
            fill="#000000"
            fillOpacity="0.8"
            stroke="#B0CDE6"
            strokeOpacity="0.4"
          />

          <circle
            cx="23"
            cy="19"
            r="5"
            fill="#B0CDE6"
          />

          <text
            x="38"
            y="23"
            fill="#FFEA93"
            fontSize="10"
            fontFamily="monospace"
            letterSpacing="1.5"
          >
            DATA PROTECTION ACTIVE
          </text>
        </g>
      </svg>

      <div className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between">
        <div>
          <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#B0CDE6]">
            Autonomous layer
          </p>

          <p className="mt-1 text-xs font-semibold text-[#FFEA93]">
            Detect · Govern · Protect
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/40 bg-[#000000]/80 backdrop-blur-md">
          <ShieldCheck
            size={18}
            className="text-purple-400"
          />
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#FFEA93]">
        {label}

        {required && (
          <span className="ml-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            *
          </span>
        )}
      </span>

      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-[#B0CDE6]/30 bg-[#000000]/50 px-4 py-3.5 text-sm text-[#FFEA93] outline-none placeholder:text-[#B0CDE6]/55 transition duration-300 focus:border-purple-500 focus:bg-[#000000]/75 focus:ring-2 focus:ring-purple-500/20"
      />
    </label>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    requirement: "",
  });

  const [selectedInterests, setSelectedInterests] =
    useState<string[]>([]);

  const [openFaq, setOpenFaq] =
    useState<number | null>(0);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const updateField = (
    key: keyof typeof form,
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const toggleInterest = (interest: string) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setSuccess("");
    setError("");

    if (!form.name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!form.email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email
      )
    ) {
      setError(
        "Please enter a valid email address."
      );
      return;
    }

    if (!form.phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    if (
      !/^\+?[0-9]{10,15}$/.test(
        form.phone.replace(/[\s-]/g, "")
      )
    ) {
      setError(
        "Please enter a valid phone number."
      );
      return;
    }

    if (!form.requirement.trim()) {
      setError(
        "Please tell us briefly about your requirement."
      );
      return;
    }

    if (selectedInterests.length === 0) {
      setError(
        "Please select at least one area you need help with."
      );
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "/api/lead-capture",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            company: form.company,
            orgName: form.company,
            designation: form.designation,
            requirement: form.requirement,
            interests: selectedInterests,
            source: "contact",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Unable to submit the form."
        );
      }

      setSuccess(
        "Thank you. Your requirement has been received. Our team will get in touch with you shortly."
      );

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        designation: "",
        requirement: "",
      });

      setSelectedInterests([]);
    } catch {
      setError(
        "Something went wrong while submitting your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#000000] pt-[108px] text-[#FFEA93]">
      {/* Ambient background */}

      <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-500/15 blur-[120px]" />

        <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-pink-500/10 blur-[120px]" />

        <div className="absolute right-0 top-[28%] h-[30rem] w-[30rem] rounded-full bg-[#B0CDE6]/15 blur-[140px]" />

        <div className="absolute bottom-0 left-[40%] h-80 w-80 rounded-full bg-[#FFEA93]/10 blur-[120px]" />
      </div>

      {/* HERO */}

      <section className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 lg:px-10 lg:pb-28 lg:pt-16">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_.95fr]">
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative z-10"
          >
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-[5.6rem]">
              Let&apos;s make

              <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                privacy
              </span>

              operational.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[#B0CDE6] sm:text-lg">
              Tell us where your organization is today.
              We&apos;ll help you identify the right
              compliance, privacy, and AI governance path
              without turning it into another complicated
              project.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              {[
                "DPDP 2023",
                "GDPR",
                "AI Governance",
                "Privacy Engineering",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#B0CDE6]/30 bg-[#000000]/60 px-4 py-2 text-xs font-semibold text-[#FFEA93]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-[#B0CDE6]/25 bg-[#000000]/55 p-4">
                <Target
                  size={18}
                  className="text-purple-400"
                />

                <p className="mt-3 text-sm font-bold text-[#FFEA93]">
                  Identify
                </p>

                <p className="mt-1 text-xs leading-5 text-[#B0CDE6]">
                  Understand your compliance gaps.
                </p>
              </div>

              <div className="rounded-2xl border border-[#B0CDE6]/25 bg-[#000000]/55 p-4">
                <Zap
                  size={18}
                  className="text-[#FFEA93]"
                />

                <p className="mt-3 text-sm font-bold text-[#FFEA93]">
                  Prioritize
                </p>

                <p className="mt-1 text-xs leading-5 text-[#B0CDE6]">
                  Focus on what matters first.
                </p>
              </div>

              <div className="rounded-2xl border border-[#B0CDE6]/25 bg-[#000000]/55 p-4">
                <ShieldCheck
                  size={18}
                  className="text-[#B0CDE6]"
                />

                <p className="mt-3 text-sm font-bold text-[#FFEA93]">
                  Govern
                </p>

                <p className="mt-1 text-xs leading-5 text-[#B0CDE6]">
                  Build controls that actually work.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="relative z-10"
          >
            <PrivacyGuardian />
          </motion.div>
        </div>
      </section>

      {/* CONTACT STRIP */}

      <section className="relative border-y border-[#B0CDE6]/20 bg-[#000000]/55">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-[#B0CDE6]/20 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          <a
            href="mailto:shilpi.kulshrestha@businezexcellence.com"
            className="group flex items-center gap-4 px-5 py-6 transition hover:bg-[#B0CDE6]/10 sm:px-8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/15 to-pink-500/10">
              <Mail
                size={18}
                className="text-purple-400"
              />
            </div>

            <div className="min-w-0">
              <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#B0CDE6]">
                Email
              </p>

              <p className="mt-1 truncate text-sm font-semibold text-[#FFEA93]">
                shilpi.kulshrestha@businezexcellence.com
              </p>
            </div>
          </a>

          <a
            href="tel:+918800138008"
            className="group flex items-center gap-4 px-5 py-6 transition hover:bg-[#B0CDE6]/10 sm:px-8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B0CDE6]/30 bg-[#B0CDE6]/10">
              <Phone
                size={18}
                className="text-[#B0CDE6]"
              />
            </div>

            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#B0CDE6]">
                Call
              </p>

              <p className="mt-1 text-sm font-semibold text-[#FFEA93]">
                +91 8800138008
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/918800138008"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 px-5 py-6 transition hover:bg-[#B0CDE6]/10 sm:px-8"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#B0CDE6]/30 bg-[#B0CDE6]/10">
              <MessageCircle
                size={18}
                className="text-[#B0CDE6]"
              />
            </div>

            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#B0CDE6]">
                WhatsApp
              </p>

              <p className="mt-1 text-sm font-semibold text-[#FFEA93]">
                Start a conversation
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 px-5 py-6 sm:px-8">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#FFEA93]/30 bg-[#FFEA93]/10">
              <MapPin
                size={18}
                className="text-[#FFEA93]"
              />
            </div>

            <div>
              <p className="text-[14px] font-bold uppercase tracking-[0.18em] text-[#B0CDE6]">
                Location
              </p>

              <p className="mt-1 text-xs font-semibold text-[#FFEA93]">
                Anthurium Office Space, near Anthurium
                Office Space, Sector 73, Noida, Basi
                Bahuddin Nagar, Uttar Pradesh 201307
                India
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}

      <section
        id="contact-form"
        className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-purple-500 to-pink-500" />

              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-[11px] font-bold uppercase tracking-[0.22em] text-transparent">
                Start here
              </span>
            </div>

            <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              Tell us what

              <span className="block text-[#B0CDE6]">
                needs solving.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#B0CDE6]">
              Whether you&apos;re preparing for DPDP,
              strengthening your privacy program, or
              building an AI governance framework, give us
              enough context to understand the problem.
            </p>

            <div className="mt-9 space-y-4">
              <div className="flex gap-4 rounded-2xl border border-[#B0CDE6]/20 bg-[#000000]/45 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/15 to-pink-500/10">
                  <Clock3
                    size={18}
                    className="text-purple-400"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#FFEA93]">
                    Focused first conversation
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#B0CDE6]">
                    We&apos;ll understand your situation
                    before suggesting a solution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-[#B0CDE6]/20 bg-[#000000]/45 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B0CDE6]/10">
                  <ShieldCheck
                    size={18}
                    className="text-[#B0CDE6]"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#FFEA93]">
                    Privacy-conscious approach
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#B0CDE6]">
                    Share only what is necessary to explain
                    your requirement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.6,
            }}
            className="rounded-[2rem] border border-[#B0CDE6]/25 bg-[#000000]/55 p-5 shadow-[0_25px_80px_rgba(77,103,135,0.25)] backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                value={form.name}
                onChange={(value) =>
                  updateField("name", value)
                }
                placeholder="Your name"
                required
              />

              <Field
                label="Work email"
                value={form.email}
                onChange={(value) =>
                  updateField("email", value)
                }
                placeholder="you@company.com"
                type="email"
                required
              />

              <Field
                label="Phone"
                value={form.phone}
                onChange={(value) =>
                  updateField("phone", value)
                }
                placeholder="+91 98765 43210"
                type="tel"
                required
              />

              <Field
                label="Company"
                value={form.company}
                onChange={(value) =>
                  updateField("company", value)
                }
                placeholder="Organization name"
              />

              <Field
                label="Designation"
                value={form.designation}
                onChange={(value) =>
                  updateField("designation", value)
                }
                placeholder="Your role"
              />
            </div>

            <div className="mt-7">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#FFEA93]">
                  What do you need help with?

                  <span className="ml-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    *
                  </span>
                </span>

                <textarea
                  value={form.requirement}
                  required
                  onChange={(e) =>
                    updateField(
                      "requirement",
                      e.target.value
                    )
                  }
                  rows={5}
                  placeholder="Tell us about your current requirement, challenge, timeline, or goal..."
                  className="w-full resize-none rounded-2xl border border-[#B0CDE6]/30 bg-[#000000]/50 px-4 py-3.5 text-sm leading-6 text-[#FFEA93] outline-none placeholder:text-[#B0CDE6]/55 transition duration-300 focus:border-purple-500 focus:bg-[#000000]/75 focus:ring-2 focus:ring-purple-500/20"
                />
              </label>
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#FFEA93]">
                    Areas of interest

                    <span className="ml-1 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      *
                    </span>
                  </p>

                  <p className="mt-1 text-xs text-[#B0CDE6]">
                    Select everything relevant.
                  </p>
                </div>

                {selectedInterests.length > 0 && (
                  <span className="rounded-full bg-gradient-to-r from-purple-500/15 to-pink-500/15 px-3 py-1 text-[10px] font-bold text-purple-300">
                    {selectedInterests.length} selected
                  </span>
                )}
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                {INTERESTS.map((interest) => {
                  const active =
                    selectedInterests.includes(
                      interest
                    );

                  return (
                    <button
                      type="button"
                      key={interest}
                      onClick={() =>
                        toggleInterest(interest)
                      }
                      className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-left text-xs font-semibold transition duration-200 ${
                        active
                          ? "border-purple-500/70 bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-[#FFEA93]"
                          : "border-[#B0CDE6]/20 bg-[#000000]/35 text-[#B0CDE6] hover:border-[#B0CDE6]/50 hover:bg-[#B0CDE6]/10"
                      }`}
                    >
                      <span>{interest}</span>

                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-full border transition ${
                          active
                            ? "border-transparent bg-gradient-to-r from-purple-500 to-pink-500 text-[#000000]"
                            : "border-[#B0CDE6]/40 text-transparent"
                        }`}
                      >
                        <Check
                          size={12}
                          strokeWidth={3}
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {error && (
              <div className="mt-6 rounded-2xl border border-purple-500/40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 px-4 py-3 text-sm text-[#FFEA93]">
                {error}
              </div>
            )}

            {success && (
              <div className="mt-6 flex gap-3 rounded-2xl border border-[#B0CDE6]/40 bg-[#B0CDE6]/10 px-4 py-4 text-sm text-[#FFEA93]">
                <Check
                  className="mt-0.5 shrink-0 text-[#B0CDE6]"
                  size={18}
                />

                <span>{success}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="group mt-7 flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 font-bold text-white shadow-lg shadow-purple-500/30 transition duration-300 hover:scale-[1.01] hover:shadow-pink-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Sending..."
                : "Start the conversation"}

              {!loading && (
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </button>

            <p className="mt-4 text-center text-[11px] leading-5 text-[#B0CDE6]/80">
              By submitting this form, you&apos;re sharing
              your details for the purpose of responding to
              your enquiry.
            </p>
          </motion.form>
        </div>
      </section>

      {/* FAQ */}

      <section className="relative border-t border-[#B0CDE6]/20">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-purple-500 to-pink-500" />

              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-[11px] font-bold uppercase tracking-[0.22em] text-transparent">
                Before we talk
              </span>

              <span className="h-px w-8 bg-gradient-to-r from-purple-500 to-pink-500" />
            </div>

            <h2 className="text-4xl font-black tracking-[-0.035em] sm:text-5xl">
              A few things

              <span className="text-[#B0CDE6]">
                {" "}
                you may wonder.
              </span>
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen =
                openFaq === index;

              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-[#B0CDE6]/20 bg-[#000000]/45"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index
                      )
                    }
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                  >
                    <span className="text-sm font-bold text-[#FFEA93] sm:text-base">
                      {faq.q}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#B0CDE6]/30 transition-transform duration-300 ${
                        isOpen
                          ? "rotate-180 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                          : ""
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        className="text-purple-400"
                      />
                    </span>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen
                        ? "auto"
                        : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-7 text-[#B0CDE6] sm:px-6">
                      {faq.a}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="relative mx-auto max-w-7xl px-5 pb-12 pt-4 sm:px-8 lg:px-10 lg:pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-purple-500/30 bg-[#000000]/70 px-6 py-12 text-center shadow-[0_30px_100px_rgba(77,103,135,0.35)] sm:px-10 sm:py-16">
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-purple-500/15 blur-[80px]" />

          <div className="absolute -right-20 -top-10 h-60 w-60 rounded-full bg-pink-500/10 blur-[80px]" />

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#B0CDE6]/15 blur-[80px]" />

          <div className="relative">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FFEA93]/30 bg-[#FFEA93]/10">
              <ShieldCheck
                size={26}
                className="text-[#FFEA93]"
              />
            </div>

            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-black tracking-[-0.035em] sm:text-5xl">
              Privacy shouldn&apos;t live in a

              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                {" "}
                policy document.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#B0CDE6] sm:text-base">
              Let&apos;s turn your privacy and AI governance
              requirements into something your organization
              can actually operate.
            </p>

            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();

                document
                  .getElementById(
                    "contact-form"
                  )
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-7 py-3.5 font-bold text-white shadow-lg shadow-purple-500/30 transition duration-300 hover:scale-105 hover:shadow-pink-500/30"
            >
              Talk to our team

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}