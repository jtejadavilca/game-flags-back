import { Schema } from "mongoose";


export const ContinentSchema = new Schema({
    name: { type: String, required: true, unique: true },
    image: { type: Schema.Types.ObjectId, ref: 'ImageCloudinary' },
    createAt: {
        type: Date,
        default: Date.now
    }
});