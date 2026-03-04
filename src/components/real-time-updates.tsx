"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function RealTimeUpdates() {
  const [updates, setUpdates] = useState<string[]>([
    "New product line launching next month",
    "Quality assurance certification renewed",
    "Research partnership with University of Zimbabwe announced",
  ])
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      setUpdates((prevUpdates) => [...prevUpdates, message])
      setMessage("")
    }
  }

  // In a real application, we would use a real-time connection
  // For now, we're using a simplified version with local state

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Real-Time Updates</h2>
      <div className="mb-4 h-40 overflow-y-auto border border-gray-200 rounded p-2">
        {updates.map((update, index) => (
          <p key={index} className="mb-1">
            {update}
          </p>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-grow"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  )
}
