""
import Link from 'next/link'
const Books = () => {
  return (
    <div>
      Books
      <Link href="/book/new">Create new Book</Link>
    </div>
  )
}

export default Books