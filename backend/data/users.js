import bcrypt from 'bcryptjs'


const users = [
    {
        name: "Faheem Khan",
        email:"Faheem@example.com",
        password: bcrypt.hashSync('12345'),
        isAdmin: true,
    },
    {
        name: "Ayan Khan",
        email:"Ayan@example.com",
        password: bcrypt.hashSync('12345'),
        isAdmin: false,
    },
    {
        name: "Aryan Khan",
        email:"Aryan@example.com",
        password: bcrypt.hashSync('12345'),
        isAdmin: false,
    }
]

export default users