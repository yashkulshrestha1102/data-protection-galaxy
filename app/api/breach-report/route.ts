// app/api/breach-report/route.ts

import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// IMPORTANT: This endpoint MUST be protected. Only callable by team members
// with the BREACH_REPORT_SECRET header. Never expose this publicly.
export async function POST(request: Request) {
  try {
    // Basic auth via secret header
    const authHeader = request.headers.get("x-breach-secret");
    if (!authHeader || authHeader !== process.env.BREACH_REPORT_SECRET) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();

    const {
      incidentId,
      detectedAt,
      detectedBy,
      natureOfBreach,
      dataAffected,
      affectedCount,
      rootCause,
      containmentActions,
      dpbNotificationRequired,
      dataPrincipalsNotificationRequired,
      notes,
    } = body;

    if (!natureOfBreach || !dataAffected) {
      return NextResponse.json(
        { success: false, message: "natureOfBreach and dataAffected are required" },
        { status: 400 }
      );
    }

    const id = incidentId || `BR-${new Date().toISOString().slice(0, 10)}-${Math.floor(Math.random() * 1000).toString().padStart(3, "0")}`;

    const record = {
      id,
      detectedAt: detectedAt || new Date().toISOString(),
      detectedBy: detectedBy || "Unknown",
      natureOfBreach,
      dataAffected,
      affectedCount: affectedCount || "Unknown",
      rootCause: rootCause || "Under investigation",
      containmentActions: containmentActions || "Pending",
      dpbNotificationRequired: Boolean(dpbNotificationRequired),
      dataPrincipalsNotificationRequired: Boolean(dataPrincipalsNotificationRequired),
      notes: notes || "",
      loggedAt: new Date().toISOString(),
      status: "OPEN",
    };

    // Store in Redis with 7-year TTL
    await redis.set(`breach:${id}`, JSON.stringify(record), { ex: 60 * 60 * 24 * 365 * 7 });

    // Also push to a list for easy retrieval
    await redis.lpush("breach:incidents", id);

    console.log(`[BREACH LOGGED] ${id} — ${natureOfBreach}`);

    return NextResponse.json({
      success: true,
      message: "Breach record logged. Follow the Breach Response Plan immediately.",
      incidentId: id,
      record,
    });
  } catch (error) {
    console.error("Breach report error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to log breach" },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve breach records (protected)
export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get("x-breach-secret");
    if (!authHeader || authHeader !== process.env.BREACH_REPORT_SECRET) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const ids = await redis.lrange("breach:incidents", 0, -1);
    const records = [];

    for (const id of ids) {
      const data = await redis.get(`breach:${id}`);
      if (data) {
        records.push(typeof data === "string" ? JSON.parse(data) : data);
      }
    }

    return NextResponse.json({ success: true, count: records.length, records });
  } catch (error) {
    console.error("Breach fetch error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch breaches" },
      { status: 500 }
    );
  }
}