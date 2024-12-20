import express, { response } from 'express';
import cors from 'cors';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Endpoints
app.get('/', (request, response) => {

    const users = [
        {
            nombre: 'Angie',
            email: 'angie.corbera@express.com',
        }, 
        { 
              nombre: 'Fran',
              email: 'fran@express.com',
        }, 
        {     nombre: 'Farid',
              email: 'farid@express.com',}
    ]

    response.status(200).json({status: 200, message: 'Respuesta estupenda', payload: users})
})

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server listening ${PORT} ==> http://localhost:${PORT}`)
})