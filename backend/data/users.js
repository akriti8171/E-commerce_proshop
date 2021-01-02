import bcrypt from "bcryptjs"

const users=[
    {
        name:"Akriti Mittal",
        email:"akriti@sample.com",
        password:bcrypt.hashSync("123456",10),
        isAdmin:true,
    },
    {
        name:"User1",
        email:"user1@sample.com",
        password:bcrypt.hashSync("123456",10),
    },  
    {
        name:"User2",
        email:"user2@sample.com",
        password:bcrypt.hashSync("123456",10)
    }
]

export default users