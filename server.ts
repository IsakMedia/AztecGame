import app from './source/app'
import http from 'http'


// Read port to start server on from `.env`, otherwise default to port 3000
const PORT = 3000

/**
 * Create HTTP and Socket.IO server.
 */
const httpServer = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
httpServer.listen(PORT)


httpServer.on('listening', () => {
    console.log(`🧑🏻‍🍳 Yay, server started on http://localhost:${PORT}`)
})
