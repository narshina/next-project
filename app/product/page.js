'use client';
import React, { useEffect, useState } from 'react'
import styles from '../product/Page.module.scss'
import Link from 'next/link'
import axios from 'axios'

const Page = () => {

  const [data, setData] = useState([])
  const [records,setRecords]=useState(data)

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://dummyjson.com/products")
      setData(res.data.products)
      setRecords(res.data.products)

    }

    fetchData()
  }, [])

  const Filtereddata=(event)=>{
    setRecords(data.filter(f=>f.category.toLowerCase().includes(event.target.value)))
  }

  return (
    <div>
          <input type='text' onChange={Filtereddata}/>
    <div className={styles.mainContainer}>
      
      {records.map((item) => (
        <Link href={`/product/${item.id}`} key={item.id}>
          <div className={styles.card}>

            <div className={styles.imageWrap}>
              {item.images.map((img, index) => (
                <img key={index} src={img} alt={item.title} />
              ))}
            </div>

            <h2>{item.title}</h2>
            <h2>{item.category}</h2>
            <h3>{item.price}</h3>
            <h3>{item.discountPercentage}</h3>

          </div>
        </Link>
      ))}
    </div></div>
  )
}

export default Page