'use client'

import { useState, useEffect } from 'react'
import { Box, Stack, Typography, Button, Modal, TextField, CircularProgress } from '@mui/material'
import { fetchInventory, addItemToInventory, removeItemFromInventory } from '@/helpers/inventoryHelpers'
import InventoryList from '@/components/InventoryList'

// Auth and routing
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase';
import { onAuthStateChanged } from 'firebase/auth';


// Custom Box Style 
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}

export default function Dashboard() {
  const router = useRouter()
  // Auth and loading state
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemName, setItemName] = useState('')
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  // Handle authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setLoading(false) // Stop loading when user state is set
        updateInventory() // Fetch inventory once authenticated
      } else {
        router.push('/login')
      }
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [router])

  // Update inventory list using the helper function
  const updateInventory = async () => {
    const inventoryList = await fetchInventory()
    setInventory(inventoryList)
  }

  // Add item using the helper function
  const addItem = async (item) => {
    await addItemToInventory(item)
    await updateInventory()
  }

  // Remove item using the helper function
  const removeItem = async (item) => {
    await removeItemFromInventory(item)
    await updateInventory()
  }

  if (loading) {
    return <CircularProgress />
  }

  return (
    <Box
      width="100vw"
      height="100vh"
      display={'flex'}
      justifyContent={'center'}
      flexDirection={'column'}
      alignItems={'center'}
      gap={2}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Item
          </Typography>
          <Stack width="100%" direction={'row'} spacing={2}>
            <TextField
              id="outlined-basic"
              label="Item"
              variant="outlined"
              fullWidth
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <Button
              variant="outlined"
              onClick={() => {
                addItem(itemName)
                setItemName('')
                handleClose()
              }}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
      <Button variant="contained" onClick={handleOpen}>
        Add New Item
      </Button>
      <InventoryList
        inventory={inventory}
        removeItem={removeItem}
      />
    </Box>
  )
}