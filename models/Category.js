// models/Category.js
import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ['product', 'service'], required: true },
  // If parentCategory is null, it's a main category. If it has an ID, it's a subcategory.
  parentCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null }, 
}, { timestamps: true });

export default mongoose.models.Category || mongoose.model('Category', categorySchema);