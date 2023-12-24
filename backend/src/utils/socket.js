import { Server } from 'socket.io'
import { logger } from './logger.js'

const initSocket = (server) => {
  const io = new Server(server)
  io.on('connection', (socket) => {
    logger.info('A user connected')
  })
}


export default initSocket