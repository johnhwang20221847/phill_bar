// MusicPick.js (React Component)
function MusicPick({ user }) {
  const [picks, setPicks] = useState([]);
  const [showInput, setShowInput] = useState(false);

  // 여기서 실시간으로 music_picks 컬렉션을 구독하여 리스트를 보여줍니다.
  
  return (
    <div className="p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-sm tracking-widest uppercase">Music Picks</h2>
        <button onClick={() => setShowInput(!showInput)} className="text-jazzRed text-xs">
          + Share Music
        </button>
      </div>

      {/* 공유된 음악 리스트 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {picks.map(pick => (
          <div key={pick.id} className="bg-jazzCard p-4 rounded border border-zinc-800">
            <h3 className="text-xs font-medium">{pick.title}</h3>
            <p className="text-[10px] text-zinc-500">{pick.artist}</p>
            {/* 평점 시스템 UI (별점 5점) */}
            <div className="mt-2 flex gap-1">
              {[1,2,3,4,5].map(star => (
                <button key={star} onClick={() => rateMusic(pick.id, user.email, star)}>★</button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
