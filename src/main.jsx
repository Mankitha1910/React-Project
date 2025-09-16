import React from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import greetingCards from './Data.js'

createRoot(document.getElementById('root')).render(
    <>
    <BrowserRouter basename="/React-Project">
    <div className='header'><header><h1 className='head'>Trendy Fashion Greeting Cards</h1></header></div>
    <div className='container'>{greetingCards.map((item) => (<App item={item} />))}
</div>
    </BrowserRouter>
    </>
)
