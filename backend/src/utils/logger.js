import winston from 'winston'

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(
      {
        format: 'HH:mm:ss DD-MM-YYYY'
      }
    ),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: 'server.log',
      level: 'debug'
    })
  ]
})