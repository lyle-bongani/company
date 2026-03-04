"use client"

import { useEffect, useState } from "react"
import io from "socket.io-client"

export function useRealTimeUpdates() {
  const [updates, setUpdates] = useState<string[]>([])

  useEffect(() => {
    const socket = io()

    // Initialize the socket connection
    fetch("/api/updates")

    socket.on("update", (msg: string) => {
      setUpdates((prevUpdates) => [...prevUpdates, msg])
    })

    return () => {
      socket.disconnect()
    }
  }, [])

  const sendUpdate = (message: string) => {
    fetch("/api/updates").then(() => {
      const socket = io()
      socket.emit("update-request", message)
    })
  }

  return { updates, sendUpdate }
}
