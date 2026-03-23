const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Portfolio API routes
app.get('/api/portfolio/health', (req, res) => {
  res.json({ 
    status: 'Portfolio server is running',
    timestamp: new Date().toISOString()
  });
});

// Contact form endpoint
app.post('/api/portfolio/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Here you can add email sending logic
  console.log('Contact form submission:', { name, email, message });
  
  res.json({ 
    success: true, 
    message: 'Message received successfully!' 
  });
});

// Projects data
app.get('/api/portfolio/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of project 1',
      technologies: ['React', 'Node.js'],
      link: '#'
    },
    // Add more projects
  ];
  
  res.json(projects);
});

app.listen(PORT, () => {
  console.log(`🎨 Portfolio backend running on http://localhost:${PORT}`);
});