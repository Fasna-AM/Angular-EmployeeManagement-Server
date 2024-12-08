const express = require('express')
const cors = require('cors')
const jsonServer = require('json-server')
require('dotenv').config()

const employeeManagementServer = express()
const router = jsonServer.router("db.json")
const middleware = jsonServer.defaults()

employeeManagementServer.use(cors())
employeeManagementServer.use(express.json())
employeeManagementServer.use(middleware)
employeeManagementServer.use(router)

const PORT = 3000 || process.env.PORT

employeeManagementServer.listen(PORT,()=>{
    console.log(`noteApp starting run at port ${PORT}`);
    
})
