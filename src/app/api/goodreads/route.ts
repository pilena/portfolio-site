import { XMLParser } from 'fast-xml-parser'
import { NextResponse } from 'next/server'

const GOODREADS_USER_ID = '158553546'
const FEED_URL = `https://www.goodreads.com/review/list_rss/${GOODREADS_USER_ID}?shelf=currently-reading`

export const revalidate = 3600

type GoodreadsItem = {
  title: string
  author_name: string
  book_medium_image_url: string
  average_rating: string
  link: string
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PortfolioBot/1.0)' },
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      return NextResponse.json({ book: null }, { status: 200 })
    }

    const xml = await res.text()
    const parser = new XMLParser({ ignoreAttributes: false })
    const data = parser.parse(xml)

    const items = data?.rss?.channel?.item
    const firstItem: GoodreadsItem | undefined = Array.isArray(items) ? items[0] : items

    if (!firstItem) {
      return NextResponse.json({ book: null }, { status: 200 })
    }

    return NextResponse.json({
      book: {
        title: firstItem.title,
        author: firstItem.author_name,
        cover: firstItem.book_medium_image_url,
        rating: firstItem.average_rating,
        link: firstItem.link,
      },
    })
  } catch {
    return NextResponse.json({ book: null }, { status: 200 })
  }
}
