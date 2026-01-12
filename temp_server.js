require('dotenv').config();  
const express = require('express');  
const cors = require('cors');  
const bookDemoRoutes = require('./routes/bookDemo');  
  
const app = express();  
