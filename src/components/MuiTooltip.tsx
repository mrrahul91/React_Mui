import React from 'react'
import { Tooltip, IconButton, Icon } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const MuiTooltip = () => {
  return (
    <Tooltip title='Delete' placement='right' arrow enterDelay={400} leaveDelay={200}>
        <IconButton>
            <DeleteIcon/>
        </IconButton>

    </Tooltip>
  )
}
