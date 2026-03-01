import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: '36px',
        }}
      >
        <svg width="130" height="130" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#D4A853" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
          <circle cx="12" cy="12" r="7" stroke="#D4A853" strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
          <circle cx="12" cy="12" r="3.5" fill="#D4A853" />
          <path d="M2 12 H7 L9 7 L12 17 L15 9 L17 12 H22" stroke="#D4A853" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
