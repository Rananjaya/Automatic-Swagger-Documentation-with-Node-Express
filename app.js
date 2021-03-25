const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express'); 

const app = express();

const swaggerOptions = {
    swaggerDefinition : {
        info: {
            title: 'Lib API',
            version: '1.0.0'
        }
    },
    apis: ['app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
console.log(swaggerDocs);
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs));


/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     responses:
 *       200:
 *         
 * description" Success
 * 
 */
app.get('/books',(req, res) =>{
    res.send([
        {
            id : 1,
            title : "Harry Potter"
        }
    ])
});
/**
 * @swagger
 * /books:
 *   post:
 *     description: Create new book
 *     parameters:
 *      - name: title
 *        description: title of the book
 *        in: formData
 *        required: true
 *        type: string
 *       
 *   responses:
 *       201:
 *          description: Created
 * 
 */
app.post('/books', (req, res) =>{
    res.status(201).send();
});


app.listen(5000, () => console.log("app lsitening on 5000"));