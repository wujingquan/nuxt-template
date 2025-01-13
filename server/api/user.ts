import { getUserByEmail, createUser } from "../user"

export default defineEventHandler(async (event) => {
  try {
    const { email } = getQuery(event)
    console.log('email-----------------------', email)
    
    if (!email) {
      return '400'
    }
  
    const user = await getUserByEmail(email as string)
    if (user) {
      
    }
    const newUser = await createUser({
      email
    })
  
    return newUser
  } catch(err) {
    console.log(err)
    return 'error'
  }
})