// Function to handle GET requests for message
export const getMessage = async (req, res) => {
    try {
      console.log('Handling GET request for message');
      const message = { message: 'Hello from the backend!' };
      res.status(200).json(message);
    } catch (error) {
      console.error('Error in getMessage:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  