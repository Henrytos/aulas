const dotenv = require("dotenv")

dotenv.config({
    path: '.env'
})

console.log(process.env.DATABASE_NAME)