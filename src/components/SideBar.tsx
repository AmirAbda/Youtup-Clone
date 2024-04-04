import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/app'

const SideBar = () => {
  return (
    <Stack
        direction="row"
        sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
            
        }}
    
    >
      {categories.map((category) => (
        <button key={category.name}>
          <span>
            <category.icon />
            {category.name}
          </span>
        </button>
      ))}

    </Stack>
  )
}

export default SideBar
