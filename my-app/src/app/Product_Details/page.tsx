// app/page.tsx
import React from 'react'
import {client} from '@/sanity/lib/client'

type IProducts = {
  productName: string
  category: string
  price: number
}

const Home = async () => {
  // Fetch data from Sanity
  const query = `*[_type == "product"]` // Adjust this query based on your schema
  const products: IProducts[] = await client.fetch(query)

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {products.map((products) => (
          <li key={products.productName}>
            <h2>{products.category}</h2>
            <p>{products.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
