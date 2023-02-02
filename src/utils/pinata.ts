import * as dotenv from "dotenv";
import PinataClient from "@pinata/sdk";
import { PinataPinOptions } from "@pinata/sdk";
import { createReadStream, ReadStream } from "fs";
import { logger } from "./logger";

dotenv.config();

const pinata = new PinataClient({
    pinataJWTKey: process.env.JWT
});

export const auth = async () => {
    const result = (await pinata.testAuthentication()).authenticated;
    
    if(!result) logger.error({
        message: {
            function: "auth",
            result: "Authentication error"
        }
    });

    return result;
}

export const pinFile = async (path: string, filename: string) => {
    let filestream: ReadStream;

    try {
        filestream = createReadStream(`${path}/${filename}`);
    } catch (error) {
        logger.error({
            message: {
                function: "pinFile",
                result: error
            }
        });

        return;
    }

    const options: PinataPinOptions = {
        pinataMetadata: {
            name: filename
        },
        pinataOptions: {
            cidVersion: 0
        }
    }
    
    try {
        const result = await pinata.pinFileToIPFS(filestream, options);

        logger.info({
            message: {
                function: "pinFile",
                result: result
            }
        });

        return result.IpfsHash;
    } catch (error) {
        logger.error({
            message: {
                function: "pinFile",
                result: error
            }
        });
    }
}

export const pinDir = async (path: string) => {
    try {
        const result = await pinata.pinFromFS(path);

        logger.info({
            message: {
                function: "pinDir",
                result: result
            }
        });

        return result.IpfsHash;
    } catch (error) {
        logger.error({
            message: {
                function: "pinDir",
                result: error
            }
        });
    }
}

export const unpin = async (cid: string) => {
    try {
        logger.info({
            message: {
                function: "unPin",
                result: await pinata.unpin(cid)
            }
        });
    } catch (error) {
        logger.error({
            message: {
                function: "unPin",
                result: error
            }
        });
    }
}