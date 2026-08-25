import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Redis instance
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Rate limiter: 100 requests per 10 seconds per IP
export const rateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(100, "10s"),
  analytics: true,
});

// Email rate limiter: 50 emails per hour per IP
export const emailRateLimiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(50, "3600s"),
  analytics: true,
});