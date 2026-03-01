import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0B3D2E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          {/* Radar pulse rings */}
          <circle cx="12" cy="12" r="10" stroke="#D4A853" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.4" />
          <circle cx="12" cy="12" r="7" stroke="#D4A853" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
          <circle cx="12" cy="12" r="3.5" fill="#D4A853" />
          {/* Pulse line */}
          <path d="M2 12 H7 L9 7 L12 17 L15 9 L17 12 H22" stroke="#D4A853" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
