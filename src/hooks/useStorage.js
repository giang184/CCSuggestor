// import {useEffect} from 'react';
// import {projectFirestore} from '../firebase/config'

// const useStorage = ({name, type}) => {

//   useEffect(() => {
//     const collectionRef = projectFirestore.collection('cards');
//     collectionRef.add({name: name, type: type})
//   }, [name, type]);

//   return {name, type};
// }

// export default useStorage;