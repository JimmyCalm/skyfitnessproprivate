export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">Sky Pro Fitness</h1>
        <p className="text-xl text-zinc-400 mb-8">
          Твоя платформа для тренировок и развития
        </p>
        <div className="space-x-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition">
            Начать бесплатно
          </button>
          <button className="border border-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
            Смотреть курсы
          </button>
        </div>
      </div>
    </main>
  );
}