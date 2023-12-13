import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../Utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  return (
    <div>
      <header>
        <div className='flex justify-between'>
          <div>
    
          </div>
          <div>
            
            <button className='netflix_btn w_135px'>
              Sign Out
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header