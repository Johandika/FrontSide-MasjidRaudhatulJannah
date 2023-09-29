import styles from "../style";

const Kegiatan = () => {
  // Buat data card sederhana untuk keperluan contoh
  const cards = [
    { id: 1, title: "Card 1", content: "Isi Card 1" },
    { id: 2, title: "Card 2", content: "Isi Card 2" },
    { id: 3, title: "Card 3", content: "Isi Card 3" },
    { id: 4, title: "Card 4", content: "Isi Card 4" },
    { id: 5, title: "Card 5", content: "Isi Card 5" },
    { id: 6, title: "Card 6", content: "Isi Card 6" },
    { id: 7, title: "Card 7", content: "Isi Card 7" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
    { id: 8, title: "Card 8", content: "Isi Card 8" },
  ];

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter} bg-Gray2 rounded-t-[4rem]`}>
      <div className={`${styles.boxWidth}  mt-40 mb-48 flex flex-col gap-20 `}>
        <div className="flex overflow-x-auto max-w-screen-xl gap-5" style={{ width: "1000px" }}>
          {cards.map((card) => (
            <div key={card.id} className="bg-white min-w-[500px] rounded-lg p-4">
              <h2 className="text-2xl font-semibold">{card.title}</h2>
              <p>{card.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kegiatan;
