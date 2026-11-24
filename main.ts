import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out of office: I took a vacation and left my auto-reply in charge, so your email is now being ignored by two of us instead of one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
