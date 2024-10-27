import { Grid } from '@mui/material'
import React from 'react'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation'
import Feed from '../Feed/Feed'

const HomePage = () => {
  return (
    <div className='px-20 mx-auto'>
      <Grid container xs={12} className='px-5 lg:px-35 justify-center'>
        <Grid item xs={0} lg={2.5} className="hidden lg:block w-full relative">
          <Navigation></Navigation>
        </Grid>
        <Grid item xs={12} lg={6} className="hidden lg:block w-full relative border-x">
          <Feed />
        </Grid>
        <Grid item xs={0} lg={3} className="hidden lg:block w-full relative">
          <p className='text-center'>right</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default HomePage