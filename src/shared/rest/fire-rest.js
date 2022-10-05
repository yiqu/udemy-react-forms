// eslint-disable-next-line no-unused-vars
import { collection, doc, setDoc, getDocs, getDoc, updateDoc, addDoc } from "firebase/firestore"; 
import { fireDatabase } from '../../Firebase';


export const regUserRef = collection(fireDatabase, "formik-reg-users");

export const createCollectionDbRef = (pathArray) => {
  return collection(fireDatabase, ...pathArray);
};

export const createDocDbRef = (pathArray) => {
  return doc(fireDatabase, ...pathArray);
};

export const getCollection = async (pathArray) => {
  const querySnapshot = await getDocs(createCollectionDbRef(pathArray));
  const res = [];
  querySnapshot.forEach((doc) => {
    res.push({
      id: doc.id,
      ...doc.data()
    });
  });
  return res;
};

export const getDocument = async (pathArray) => {
  const docRef = createDocDbRef(pathArray);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
};


export const getAddUserRef = (payload) => {
  const docRef = addDoc(regUserRef, {
    ...payload
  });
  return docRef;
};


export const editUserRef = (payload) => {
  console.log("user ->", payload);
  const userEditingRef = doc(regUserRef, payload.id);
  return updateDoc(userEditingRef, {
    ...payload
  });
};