import { Server } from 'socket.io';
import { logger } from './logger.js';

const initSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.listen(5001)

  io.on('connection', (socket) => {
    const clientId = socket.id;
    logger.info(`Client connected: ${clientId}`);

    socket.on('join room', (conversationId) => {
      socket.join(conversationId);
      logger.info(`Client ${clientId} joined room: ${conversationId}`);
    });

    socket.on('chat message', (messageData) => {
      const { conversationId, message } = messageData;
      io.to(conversationId).emit('chat message', message);
      logger.info(`Message sent to room ${conversationId}: ${message}`);
    });

    socket.on('disconnect', () => {
      logger.info(`Client disconnected: ${clientId}`);
    });

    socket.on('error', (error) => {
      logger.error(`Socket error: ${error.message}`);
    });
  });

  return io;
}

export default initSocket;