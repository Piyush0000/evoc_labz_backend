  
@echo off  
echo require('dotenv').config();  
echo const express = require('express');  
echo const cors = require('cors');  
echo const bookDemoRoutes = require('./routes/bookDemo');  
echo.  
echo const app = express();  
echo const PORT = process.env.PORT ^| ^| 5000  
echo.  
echo // Middleware  
echo app.use(cors({  
echo   origin: [  
echo     'https://www.evoclabs.com',  
echo     'https://evoclabs.com',  
echo     'http://localhost:3000',  
echo     'http://localhost:5173',  
echo     'http://localhost:3001'  
echo   ],  
echo   credentials: true  
echo }));  
echo app.use(express.json());  
echo.  
echo // Routes  
echo app.use('/api', bookDemoRoutes);  
echo.  
echo // Start server  
echo app.listen(PORT, (() => {  
echo   console.log('Server running on port ' + PORT);  
echo }));  
echo.  
echo module.exports = app; 
