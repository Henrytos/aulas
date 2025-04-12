const express = require("express")

const app = express()

app.use((req, response, next)=>{ // middleware 
    console.log('[REQUEST] /')
    next()
})

app.get('/',(request, response)=>{
    console.log("[GET] /")
    return response.json([0,1,2,3,2,1])
})


app.post('/',(request, response)=>{
    console.log("[POST] /")
    return response.status(200).json()
})

app.get('/temperatures',(request, response)=>{
    console.log("[GET] /temperatures")
    return response.json([1,2,3,4,5,6])
})


app.listen(3000, ()=>{
    console.log(`🚀🚀🚀 Rodando servidor em porta 3000 🚀🚀🚀`)
})