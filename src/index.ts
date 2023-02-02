import { 
    auth, 
    pinDir, 
    pinFile, 
    unpin 
 } from "./utils/pinata";

const main = async () => {
    try {
        await auth()
    } catch (error) {
        console.log("Authentication error", error);
        return;
    }

    switch(process.argv[2]) {
        case "pinFile":
            process.argv.length == 5
            ? console.log(await pinFile(process.argv[3], process.argv[4]))
            : console.log("Invalid arguments")
            break;
        case "pinDir":
            process.argv.length == 4
            ? console.log(await pinDir(process.argv[3]))
            : console.log("Invalid arguments")
            break;
        case "unpin":
            process.argv.length == 4
            ? console.log(await unpin(process.argv[3]))
            : console.log("Invalid arguments")
            break;
        default:
            process.argv.length < 3
            ? console.log("Insufficient arguments")
            : console.log("Invalid function")
    }
}

main();