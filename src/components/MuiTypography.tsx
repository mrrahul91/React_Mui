
import { Typography } from '@mui/material'
import React from 'react'

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
        
        <Typography variant='subtitle1'>Sub title 1</Typography>
        <Typography variant='subtitle2'>Sub title 2</Typography>

        <Typography variant='body1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, magnam impedit aliquid iure eveniet tenetur dolore earum iste amet pariatur illo ipsa. Eaque, reiciendis ea. Necessitatibus dolor quia recusandae. Eveniet!</Typography>
        <Typography variant='body2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, magnam impedit aliquid iure eveniet tenetur dolore earum iste amet pariatur illo ipsa. Eaque, reiciendis ea. Necessitatibus dolor quia recusandae. Eveniet!</Typography>
    </div>
  )
}
