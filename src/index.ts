import { PinataPinOptions } from "@pinata/sdk";
import { createReadStream, ReadStream } from "fs";
import { logger } from "./utils/logger";
import { pinata } from "./utils/pinata";

//example
//const sourcepath = "./assets";
//const filename = "test.json";
//const filestream = createReadStream("./assets/test.json");
//const cid = "QM...";

const auth = async () => {
    const result = (await pinata.testAuthentication()).authenticated;
    
    if(!result) logger.error({
        message: {
            function: "auth",
            result: "Authentication error"
        }
    });

    return result;
}

const pinFile = async (path: string, filename: string) => {
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
        logger.info({
            message: {
                function: "pinFile",
                result: await pinata.pinFileToIPFS(filestream, options)
            }
        });
    } catch (error) {
        logger.error({
            message: {
                function: "pinFile",
                result: error
            }
        });
    }
}

const pinDir = async (path: string) => {
    try {
        logger.info({
            message: {
                function: "pinDir",
                result: await pinata.pinFromFS(path)
            }
        });
    } catch (error) {
        logger.error({
            message: {
                function: "pinDir",
                result: error
            }
        });
    }
}

const unPin = async (cid: string) => {
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