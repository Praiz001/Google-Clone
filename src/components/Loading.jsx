import React from 'react'
import Loader from 'react-loader-spinner'

export const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <Loader type='Puff' color='#00BFFF' width={550} height={80 } />
        </div>
    )
}
