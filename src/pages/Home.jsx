import React, { useState, useEffect } from 'react'

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
      {popular.map((book) => {
        return (
          <div key={book.key} className="books_map">
            <p>{book.title}</p>
            <img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`}/>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Home
