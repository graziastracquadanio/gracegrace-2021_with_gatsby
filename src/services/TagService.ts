import { deleteDoc, doc, Firestore, getDoc, setDoc, collection, getDocs } from 'firebase/firestore';
import { FirebaseStorage, ref } from 'firebase/storage';

import { Tag } from 'types/tag';

export class TagService {
  private db;
  private storage;

  constructor(db: Firestore, storage: FirebaseStorage) {
    this.db = db;
    this.storage = storage;
  }

  getAll = async (): Promise<Tag[]> => {
    const querySnap = await getDocs(collection(this.db, 'tags'));
    const data = querySnap.docs.map((docSnap) => docSnap.data() as Tag);
    return Promise.resolve(data);
  };

  get = async (id: string): Promise<Tag | null> => {
    let data = null;
    const snap = await getDoc(doc(this.db, 'tags', id));
    if (snap.exists()) {
      data = snap.data() as Tag;
    }
    return Promise.resolve(data);
  };

  add = async (data: Tag): Promise<string | null> => {
    const result = await setDoc(doc(this.db, 'tags', data.id), data);
    console.log(result);
    return Promise.resolve(data.id);
  };
}
