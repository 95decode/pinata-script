import winston from "winston";

const levels = {
    error: 0,
    info: 1
}

const nameFormat = winston.format(info => {
    info.label = "test";
    return info;
});

export const logger = winston.createLogger({
    levels: levels,
    format: winston.format.combine(
        nameFormat(),
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: 'log' },
    transports: [
        new winston.transports.File({ filename: 'pinata.log' })
    ]
});