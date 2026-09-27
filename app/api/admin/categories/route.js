// app/api/admin/categories/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Category from '@/models/Category';

export async function GET() {
  await dbConnect();
  const categories = await Category.find({}).populate('parentCategory', 'name');
  return NextResponse.json(categories, { status: 200 });
}

export async function POST(request) {
  await dbConnect();
  try {
    const data = await request.json();
    const newCategory = await Category.create(data);
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create category' }, { status: 500 });
  }
}