import { useState, useEffect } from 'react'

export default function Timer({ date }) {
  const [time, setTime] = useState(calcTime())

  function calcTime() {
    const diff = new Date(date) - new Date()
    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 }
    return {
      d: Math.floor(diff / 86400000),
      h: Math.floor((diff % 86400000) / 3600000),
      m: Math.floor((diff % 3600000) / 60000),
      s: Math.floor((diff % 60000) / 1000),
    }
  }

  useEffect(() => {
    const id = setInterval(() => setTime(calcTime()), 1000)
    return () => clearInterval(id)
  }, [date])

  const pad = n => String(n).padStart(2, '0')

  return (
    <div className="timer-section">
      <p className="timer-label">до торжества осталось</p>
      <div className="timer-grid">
        <Unit value={pad(time.d)} label="дней" />
        <span className="timer-sep">·</span>
        <Unit value={pad(time.h)} label="часов" />
        <span className="timer-sep">·</span>
        <Unit value={pad(time.m)} label="минут" />
        <span className="timer-sep">·</span>
        <Unit value={pad(time.s)} label="секунд" />
      </div>
    </div>
  )
}

function Unit({ value, label }) {
  return (
    <div className="timer-unit">
      <span className="timer-num">{value}</span>
      <span className="timer-name">{label}</span>
    </div>
  )
}