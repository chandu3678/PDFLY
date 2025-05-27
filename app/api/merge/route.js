import { NextResponse } from "next/server";
import PDFMerger from "pdf-merger-js";
import fs from "fs/promises";
import path from "path";
import os from "os";

export async function POST(req) {
  const formData = await req.formData();
  const files = formData.getAll("files");
  const merger = new PDFMerger();

  // Step 1: Save each uploaded file to a temp file
  for (const file of files) {
    const buffer = Buffer.from(await file.arrayBuffer());

    const tempFilePath = path.join(os.tmpdir(), `${Date.now()}-${file.name}`);
    await fs.writeFile(tempFilePath, buffer);

    await merger.add(tempFilePath);
  }

  // Step 2: Merge to buffer and return response
  const mergedBuffer = await merger.saveAsBuffer();

  return new NextResponse(mergedBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=merged.pdf",
    },
  });
}
