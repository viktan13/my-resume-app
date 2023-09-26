import { addDoc, collection } from 'firebase/firestore'
import db from 'shared/api/connectDB'

export const saveToDB = async (path: string, data: any): Promise<undefined> => {
    try {
        const docRef = await addDoc(collection(db, path), data)
        console.log('Document written with ID: ', docRef.id)
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}
