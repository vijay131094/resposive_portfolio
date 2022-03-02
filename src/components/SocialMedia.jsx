import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'


const SocialMedia = () => {
  return (
    <div className='app__social'>
      
        <div>
        <a href="https://github.com/vijay131094" target="_blank" rel="noreferrer"> 
          <BsGithub/>
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/vijay-kumar-b4b514138/" target="_blank" rel="noreferrer"> 
            <BsLinkedin  />
            
            </a>
        </div>
    </div>
  )
}

export default SocialMedia