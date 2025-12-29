import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const filePath = join(process.cwd(), 'public', 'og_image.png');
    const imageBuffer = await readFile(filePath);

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Content-Length': imageBuffer.length.toString(),
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
        'X-Content-Type-Options': 'nosniff',
        // Cho phép Facebook crawler access
        'X-Frame-Options': 'ALLOWALL',
      },
    });
  } catch (error) {
    console.error('Error serving og_image.png:', error);
    return new NextResponse('Image not found', { status: 404 });
  }
}

