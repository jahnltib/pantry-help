import { collection, doc, getDocs, query, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { firestore } from '@/firebase';

/**
 * Fetches inventory from Firestore.
 * @returns {Promise<Array>} List of inventory items.
 */
export const fetchInventory = async () => {
  const snapshot = query(collection(firestore, 'inventory'));
  const docs = await getDocs(snapshot);
  const inventoryList = [];
  docs.forEach((doc) => {
    inventoryList.push({ name: doc.id, ...doc.data() });
  });
  return inventoryList;
};

/**
 * Adds a new item to the inventory or updates the quantity if it already exists.
 * @param {string} item - The item name.
 * @returns {Promise<void>}
 */
export const addItemToInventory = async (item) => {
  const docRef = doc(collection(firestore, 'inventory'), item);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    await setDoc(docRef, { quantity: quantity + 1 });
  } else {
    await setDoc(docRef, { quantity: 1 });
  }
};

/**
 * Removes an item from the inventory or decrements the quantity if more than one.
 * @param {string} item - The item name.
 * @returns {Promise<void>}
 */
export const removeItemFromInventory = async (item) => {
  const docRef = doc(collection(firestore, 'inventory'), item);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const { quantity } = docSnap.data();
    if (quantity === 1) {
      await deleteDoc(docRef);
    } else {
      await setDoc(docRef, { quantity: quantity - 1 });
    }
  }
};