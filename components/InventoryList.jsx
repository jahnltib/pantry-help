'use client'

import { Stack, Box, Typography } from '@mui/material'
import InventoryItem from './InventoryItem'

export default function InventoryList({ inventory, removeItem }) {
  return (
    <Box border={'1px solid #333'}>
      <Box
        width="800px"
        height="100px"
        bgcolor={'#ADD8E6'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Typography variant={'h2'} color={'#333'} textAlign={'center'}>
          Inventory Items
        </Typography>
      </Box>
      <Stack width="800px" height="300px" spacing={2} overflow={'auto'}>
        {inventory.map(({ name, quantity }) => (
          <InventoryItem
            key={name}
            name={name}
            quantity={quantity}
            removeItem={removeItem}
          />
        ))}
      </Stack>
    </Box>
  )
}