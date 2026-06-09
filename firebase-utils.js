// firebase-utils.js
const { db, collection, addDoc, updateDoc, doc, arrayUnion } = window.__firestore;

export const addMusicPick = async (musicData) => {
  return await addDoc(collection(db, 'music_picks'), {
    ...musicData,
    rating: 0,
    ratingsCount: 0,
    voters: {},
    createdAt: Date.now()
  });
};

export const rateMusic = async (pickId, userEmail, rating) => {
  const pickRef = doc(db, 'music_picks', pickId);
  // 평점 로직 구현 (기존 평균 평점 업데이트)
  await updateDoc(pickRef, {
    [`voters.${userEmail.replace('.', '_')}`]: rating
  });
};
