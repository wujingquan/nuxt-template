import { getUserByEmail } from "../user"

export default defineEventHandler(async (event) => {
  try {
    const { email } = getQuery(event)
    
    if (!email) {
      return '400'
    }
  
    const user = await getUserByEmail(email as string)
    if (!user) {
      return '404'
    }
  
  } catch(err) {
    console.log(err)
    return 'error'
  }
})