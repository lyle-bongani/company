import { NextResponse } from "next/server"
import { Server as SocketIOServer } from "socket.io"
import type { Server as HTTPServer } from "http"
import type { NextApiRequest, NextApiResponse } from "next"
import type { Socket as NetSocket } from "net"

interface SocketServer extends HTTPServer {
  io?: SocketIOServer | undefined
}

interface SocketWithIO extends NetSocket {
  server: SocketServer
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO
}

export async function GET(req: NextApiRequest, res: NextApiResponseWithSocket) {
  if (res.socket.server.io) {
    console.log("Socket is already running")
  } else {
    console.log("Socket is initializing")
    const io = new SocketIOServer(res.socket.server)
    res.socket.server.io = io

    io.on("connection", (socket) => {
      console.log("New client connected")

      socket.on("update-request", (msg) => {
        console.log("update-request received:", msg)
        // Broadcast the update to all connected clients
        io.emit("update", msg)
      })

      socket.on("disconnect", () => {
        console.log("Client disconnected")
      })
    })
  }

  return NextResponse.json({ message: "Socket server is running" })
}
