import User from '../model/User'
import bcrypt from 'bcryptjs'


export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find()
  } catch (error) {
    console.log(error)
  }
  if(!users){
    return res.status(404).json({message:"No users found !!"})
  }
  return res.status(200).json({users})

}


export const signup = async (req, res, next) =>{
  const {name, email, password} = req.body;
  let existingUser;

  try {
    existingUser = await User.findOne({email})
  } catch (error) {
    console.log(error)
  }

  if(existingUser){
    return res.status(400).json({message:"User already exist !!"})
  }
  
  const hashedPassword = bcrypt.hashSync(password)

  const user = new User({
    name,
    email,
    password : hashedPassword,
    blogs:[]
  });

  try {
    await user.save()
  } catch (error) {
    console.log(error)
  }

  return res.status(201).json({user})
}


export const login = async (req, res, next) => {
  const {email, password} = req.body;

  let existingUser;

  try {
    existingUser = await User.findOne({email})
  } catch (error) {
    console.log(error)
  }

  if(!existingUser){
    return res.status(404).json({message:"User not found wrong email !"})
  }

  const isPassworCorrect = bcrypt.compareSync(password,existingUser.password)
 
  if (!isPassworCorrect) {
    return res.status(400).json({message:"Incorrect password !"})
  }
  return res.status(201).json({message:"Login successfull"})

}