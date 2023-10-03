import { collection, query, where, getDocs } from 'firebase/firestore'
import db from 'shared/api/connectDB'
import { type User } from 'entities/User'

export const getUserByUsername = async (username: string, password: string): Promise<User> => {
    const q = query(collection(db, 'users'), where('username', '==', username), where('password', '==', password))
    const querySnapshot = await getDocs(q)
    let user: User
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        user = {
            id: doc.id,
            username: doc.data().username
        }
    })

    return user
}
