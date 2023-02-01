import * as dotenv from "dotenv";
import PinataClient, { PinataPinOptions } from "@pinata/sdk";
import { createReadStream } from "fs";
import { logger } from "./utils/logger";

dotenv.config();

const jwt = process.env.JWT;
const pinata = new PinataClient({
    pinataJWTKey: jwt
});

// for test
const sourcepath = "./assets";
const filename = "test.json";
const filestream = createReadStream("./assets/test.json");

//const CID = "QM...";

const auth = async () => {
    return (await pinata.testAuthentication()).authenticated;
}

const pinFile = async () => {
    const options: PinataPinOptions = {
        pinataMetadata: {
            name: filename
        },
        pinataOptions: {
            cidVersion: 0
        }
    };

    try {
        logger.info({
            message: await pinata.pinFileToIPFS(filestream, options)
        });
    } catch (error) {
        logger.error({
            message: error
        });
    }
}

const pinDir = async () => {
    try {
        logger.info({
            message: await pinata.pinFromFS(sourcepath)
        });
    } catch (error) {
        logger.error({
            message: error
        });
    }
}

/*
const unPin = async () => {
    return (await pinata.unpin(CID));
}
*/