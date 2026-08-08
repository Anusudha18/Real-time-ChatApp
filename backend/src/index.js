import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from "express";
import cors from "cors";
import "dotenv/config";

import fs from "fs";
import path from "path";
import job from "./lib/cron.js";

import User from "./models/user.model.js";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from '@clerk/express';

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL;
const publicDir = path.join(process.cwd(), "public");

// webhook route MUST come before express.json(), and needs raw body
app.use("/api/webhooks/clerk", express.raw({ type: "application/json" }), clerkWebhook);

app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, credentials: true }));
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.status(200).json({ ok: true });
});

if (fs.existsSync(publicDir)) {
  app.use(express.static(publicDir));

  app.get("/*splat", (req, res, next) => {
    res.sendFile(path.join(publicDir, "index.html"), (err) => next(err));
  });
}

app.listen(PORT, async () => {
  await connectDB();
  console.log("server is up and running on PORT", PORT);

  if (process.env.NODE_ENV === "production") job.start();
});