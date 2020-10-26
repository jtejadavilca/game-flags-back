import { Schema } from 'mongoose';

export const ImageCloudinarySchema = new Schema({
    asset_id: String,
    public_id: String,
    version: Number,
    signature: String,
    resource_type: String,
    created_at: String,
    tags: [String],
    format: String,
    type: String,
    bytes: Number,
    etag: String,
    width: Number,
    height: Number,
    url: String,
    secure_url: String,
    original_filename: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
  });