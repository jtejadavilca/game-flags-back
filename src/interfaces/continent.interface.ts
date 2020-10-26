import { Document } from "mongoose";

export interface IContinent extends Document {
    name: string,
    image ?: string
}