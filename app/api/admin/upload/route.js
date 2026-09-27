// app/api/admin/upload/route.js
import { NextResponse } from 'next/server';
import cloudinary from '@/lib/cloudinary';

export async function POST(request) {
  try {
    const { image } = await request.json(); // Expects base64 string
    if (!image) return NextResponse.json({ error: 'No image provided' }, { status: 400 });

    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: 'ecommerce',
    });

    return NextResponse.json({ url: uploadResponse.secure_url, public_id: uploadResponse.public_id }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
  }
}