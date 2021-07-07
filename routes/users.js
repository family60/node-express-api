import express from 'express';
import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [];

//all routes in here aready start with /users so theres no nead to specify /users again
router.get('/', (req, res) => {
    console.log('GET ROUTE REACHED');
    res.send('Hello')
    console.log(users);
});

router.get('/:id', (req, res) =>{
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
    console.log(req.params);
    console.log(foundUser);
    res.send('GET ID ROUTE REACHED');

});

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');
    const user = req.body;
    console.log(req.body);
    users.push({...user, id: uuidv4()});
    res.send(`User with the username ${user.firstName} added to the database!`);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database`);
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age, weight, height } = req.body;
    const user = users.find((user) => user.id == id);
    if(firstName){
        user.firstName = firstName;
    }
    if(lastName){
        user.lastName = lastName;
    }
    if(age){
        user.age = age;
    }
    if(weight){
        user.weight = weight;
    }
    if(height){
        user.height = height;
    }

    res.send(`User with the id ${id} has been updated`);
});

export default router;