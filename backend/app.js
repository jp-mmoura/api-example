import express from 'express';
import { router } from './routes/index.js'; // No need to import getMessage here

const app = express();

// Use the router for API routes
app.use('/api', router);

// Export the app for server.js to use
export default app;
