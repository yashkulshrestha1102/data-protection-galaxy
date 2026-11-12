// app/lib/rate-limit.ts

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ✅ Lazy init — build-time pe instantiate nahi hoga
let _redis: Redis | null = null;
function getRedis(): Redis {
  if (!_redis) {
    _redis = new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
  }
  return _redis;
}

let _rateLimiter: Ratelimit | null = null;
function getRateLimiter(): Ratelimit {
  if (!_rateLimiter) {
    _rateLimiter = new Ratelimit({
      redis: getRedis(),
      limiter: Ratelimit.slidingWindow(10, "10s"),
      analytics: true,
    });
  }
  return _rateLimiter;
}

let _emailRateLimiter: Ratelimit | null = null;
function getEmailRateLimiter(): Ratelimit {
  if (!_emailRateLimiter) {
    _emailRateLimiter = new Ratelimit({
      redis: getRedis(),
      limiter: Ratelimit.slidingWindow(50, "3600s"),
      analytics: true,
    });
  }
  return _emailRateLimiter;
}

// ✅ Backward-compatible exports — existing imports kaam karenge
export const rateLimiter = {
  limit: (key: string) => getRateLimiter().limit(key),
};

export const emailRateLimiter = {
  limit: (key: string) => getEmailRateLimiter().limit(key),
};