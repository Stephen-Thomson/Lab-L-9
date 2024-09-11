import React, { useState } from 'react'
import { Button, Typography, Container, CircularProgress } from '@mui/material'

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState<string | null>(null)

  const handleButtonClick = async () => {
    // TODO: Create an instance of AuthriteClient and make a signed request to '/protected'
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Frontend App
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleButtonClick}
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress size={24} /> : 'Send Request to Backend'}
      </Button>
      {response && (
        <Typography variant="body1" style={{ marginTop: '20px' }}>
          Response from backend: {response}
        </Typography>
      )}
    </Container>
  )
}

export default App
