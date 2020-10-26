import { Document } from "mongoose";

export interface ICountry extends Document {
    name: string,
    image ?: string
}