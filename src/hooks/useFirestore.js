import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .onSnapshot(snap => {
        let cards = [];
        snap.forEach(card => {
          cards.push({...card.data(), id: card.id});
        });
        setCards(cards);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { cards };
}

export default useFirestore;