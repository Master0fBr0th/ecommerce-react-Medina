import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la basedatos
  const database = getFirestore();

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'items');

  // crear query/consulta con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos los datos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

const products = [
    { title:'Gabardina', category: 'Rustico', description:'Gabardina de 1.5m de ancho', price: 1200, pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/092/965/products/i91-008-3-tela-gabardina-cruda-tienda-de-telas-online-trapitos-com-ar1-1f327ba4946730923416060055958128-1024-1024.jpg', stock:'10'},
    { title:'Panama', category: 'Tapiceria', description:'Panama de 3m de ancho', price: 2200, pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/092/965/products/t19-011-3-tela-panama-crudo-natural-tienda-de-telas-online-trapitos-com-ar11-10cf9a7b28fcb3608c16353686625086-1024-1024.jpg', stock:'10'},
    { title:'Blackout', category: 'Cortina', description:'Blackout de 1,5m de ancho', price: 1850, pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/202/178/products/197-41-d6a9698881c981f67c16189507839995-1024-1024.jpg', stock:'10'}
  ]

  export const createAllProducts = async () => {
    try {
      // obtenemos la basedatos
      const database = getFirestore(); 
  
      // obtenemos la referencia a la collecion
      const collectionReference = collection(database, 'items');
      for(let i = 0; i < products.length; i++) {
        const snapshot = await addDoc(collectionReference, products[i]);
      }
    } catch (error) {
      console.warn(error)
    }
  }