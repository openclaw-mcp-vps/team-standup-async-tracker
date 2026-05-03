import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'StandupSync — Async Standup Tracker with AI Blocker Detection',
  description: 'Collect daily standups from Slack or Teams, auto-detect blockers and dependencies with AI, and keep your remote team unblocked. $9/mo.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fbc27276-50df-432a-94bb-9fcef0a33ad9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
