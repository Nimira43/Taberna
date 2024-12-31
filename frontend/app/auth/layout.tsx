import { Box } from '@mui/material'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Box className='h-screen flex items-center justify-center'>
        {children}
      </Box>
    </div>
  )
}
