import winston from "winston";

const levels = {
    error: 0,
    info: 1
}

export const logger = winston.createLogger({
    levels: levels,
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
    ),
    defaultMeta: { service: 'log' },
    transports: [
        new winston.transports.File({ filename: 'pinata.log' })
    ]
});