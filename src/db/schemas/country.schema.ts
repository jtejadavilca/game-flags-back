import { Schema } from "mongoose";


export const CountrySchema = new Schema({
    name: { type: String, required: true, unique: true },
    continent: { type: Schema.Types.ObjectId, ref: 'Continent' },
    image: { type: Schema.Types.ObjectId, ref: 'ImageCloudinary' },
    createAt: {
        type: Date,
        default: Date.now
    }
});