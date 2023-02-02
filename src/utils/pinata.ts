import * as dotenv from "dotenv";
import PinataClient from "@pinata/sdk";

dotenv.config();

export const pinata = new PinataClient({
    pinataJWTKey: process.env.JWT
});