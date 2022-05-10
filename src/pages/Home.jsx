import React, { useState, useEffect } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import noCover from '../assets/img/noCover.jpg'

function Home() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, [])

  const getPopular = async () => {
    const check = localStorage.getItem('popular')

    if(check){
      setPopular(JSON.parse(check));
    }else{
      const api = await fetch('http://openlibrary.org/subjects/love.json?published_in=1500-1600')
      const data = await api.json()
      localStorage.setItem('popular', JSON.stringify(data.works))
      setPopular(data.works)
    }
  }

  return (
    <>
    <br />
    <div className='popular_book'>
      <h1>Popular</h1>
      <br/>
      <hr/>
      <br/>
      <Splide options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '15px'
      }}>
        {popular.map((book) => {
          return (
            <SplideSlide>
              <div key={book.key} className="books_map">
                <div className="book_about">
                  <p>{book.title}</p>
                  <a href="#">Read more</a>
                </div>
                <img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`} alt={book.title}/>
              </div>
            </SplideSlide>
          )
        })}
      </Splide>
    </div>
    </>
  )
}

export default Home
