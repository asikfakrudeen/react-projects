import React from 'react'
import '../App.css'
import bbc_logo from '../assets/bbc_logo.png'

const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="news-card">
        <img src={src ? src : bbc_logo} className="news-card__image" alt={title}/>
        <div className="news-card__body">
            <h5 className="news-card__title">{title.slice(0, 50)}</h5>
            <p className="news-card__text">
                {description ? description.slice(0, 90) : "No description available."}
            </p>
            <a href={url} className="news-card__button" target="_blank" rel="noreferrer">
                Read More
            </a>
        </div>
    </div>
  )
}

export default NewsItem

// <div className = "card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style = {{maxWidth:'345px'}}>
//     <img src = {src?src:bbc_logo} style={{ height: '200px', width: '100%', objectFit: 'cover' }} className = "card-img-top" alt = "..."/>
//     <div className = "card-body">
//         <h5 className = "card-title">{title.slice(0,50)}</h5>
//         <p className = "card-text">{description?description.slice(0,90):"sfasfaf"}</p>
//         <a href = {url} className = "btn btn-primary">Read More</a>
//     </div>
// </div>