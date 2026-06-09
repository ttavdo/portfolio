import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  pulse: number
  pulseSpeed: number
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const GRID_SIZE = 60
    const nodes: Node[] = []
    const cols = Math.ceil(canvas.width / GRID_SIZE) + 1
    const rows = Math.ceil(canvas.height / GRID_SIZE) + 1

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        nodes.push({
          x: c * GRID_SIZE,
          y: r * GRID_SIZE,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
        })
      }
    }

    let time = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      time += prefersReduced ? 0 : 0.005

      const offsetX = Math.sin(time) * 8
      const offsetY = Math.cos(time * 0.7) * 6

      ctx.strokeStyle = 'rgba(0, 245, 255, 0.04)'
      ctx.lineWidth = 1

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]
        if (!prefersReduced) {
          node.x += node.vx
          node.y += node.vy
          node.pulse += node.pulseSpeed

          if (node.x < 0 || node.x > canvas.width) node.vx *= -1
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1
        }

        const nx = node.x + offsetX
        const ny = node.y + offsetY

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j]
          const ox = other.x + offsetX
          const oy = other.y + offsetY
          const dist = Math.hypot(nx - ox, ny - oy)

          if (dist < GRID_SIZE * 1.5) {
            const alpha = (1 - dist / (GRID_SIZE * 1.5)) * 0.15
            ctx.strokeStyle = `rgba(0, 245, 255, ${alpha})`
            ctx.beginPath()
            ctx.moveTo(nx, ny)
            ctx.lineTo(ox, oy)
            ctx.stroke()
          }
        }

        const pulseAlpha = 0.2 + Math.sin(node.pulse) * 0.15
        ctx.fillStyle = `rgba(0, 245, 255, ${pulseAlpha})`
        ctx.beginPath()
        ctx.arc(nx, ny, 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
