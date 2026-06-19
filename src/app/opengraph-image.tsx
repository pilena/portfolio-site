import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Lenka Živković — Frontend Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const cormorant = await fetch(
    'https://fonts.gstatic.com/s/cormorantgaramond/v22/co3YmX5slCNuHLi8bLeY9MK7whWMhyjYqXtK.woff2'
  ).then(res => res.arrayBuffer())

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0e0e0e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderLeft: '2px solid #f9a8d4',
            paddingLeft: '40px',
          }}
        >
          <span
            style={{
              fontFamily: 'Cormorant',
              fontSize: 80,
              fontWeight: 400,
              color: '#f0ece4',
              lineHeight: 1.05,
              letterSpacing: '-1px',
            }}
          >
            Lenka Živković
          </span>
          <span
            style={{
              fontFamily: 'Cormorant',
              fontSize: 32,
              fontWeight: 300,
              color: '#f9a8d4',
              marginTop: 16,
              letterSpacing: '4px',
              textTransform: 'uppercase',
            }}
          >
            Frontend Developer
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 100,
            fontSize: 18,
            color: '#a0a0a0',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            fontFamily: 'Cormorant',
          }}
        >
          lenka-zivkovic.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Cormorant',
          data: cormorant,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  )
}
