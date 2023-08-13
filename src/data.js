import { collection, getDocs } from "firebase/firestore";
import { db } from './firebase';
const getData = async (c, document) => {
  const col = collection(db, 'users')
  let a
  getDocs(col).then(res => {
    a = res
  })
  return a
}

export { getData }
