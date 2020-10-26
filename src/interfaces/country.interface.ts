import { Document } from "mongoose";

export interface ICountry extends Document {
    name: string,
    continent: string,
    image ?: string
}
