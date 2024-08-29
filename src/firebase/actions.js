

import {getDownloadURL, getStorage, ref, uploadBytes, deleteObject} from "firebase/storage";
import firebase_app from "@/firebase/config";


export async function firebaseUploadImage(path, userID, imageBlob, unique = null) {

    const storage = getStorage(firebase_app);

    const storagePath = unique ? `${path}/${userID}/${unique}` : `${path}/${userID}`;
    const storageRef = ref(storage, storagePath);

    try {
        const snapshot = await uploadBytes(storageRef, imageBlob);
        return await getDownloadURL(snapshot.ref);
    } catch (uploadError) {
        console.error('Error uploading image: ', uploadError);
        return null;
    }
}

