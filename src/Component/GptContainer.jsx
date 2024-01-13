import React from 'react'
import GptSeacrhbar from './GptSeacrhbar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptContainer = () => {
  return (
   <>
    <div className='bg-black h100'> 
        <div className="container bg-dark h100 w-100 ">
            <div className=''>
                <GptSeacrhbar></GptSeacrhbar>
                <GptMovieSuggestions></GptMovieSuggestions>
            </div>
        </div>
    </div>
   </>
  )
}

export default GptContainer