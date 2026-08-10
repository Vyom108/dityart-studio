export default function HeroCollage() {
  return (
    <div className="relative h-[620px]">

      <div className="absolute left-6 top-0 h-64 w-64 rounded-[32px] bg-[#FFE4B5] shadow-2xl transition duration-500 hover:-translate-y-3"></div>

      <div className="absolute right-0 top-8 h-52 w-72 rounded-[32px] bg-[#FFF5E6] shadow-2xl transition duration-500 hover:-translate-y-3"></div>

      <div className="absolute left-0 bottom-14 h-52 w-72 rounded-[32px] bg-[#FFF9F0] shadow-2xl transition duration-500 hover:-translate-y-3"></div>

      <div className="absolute right-6 bottom-0 h-64 w-64 rounded-[32px] bg-[#FFECC8] shadow-2xl transition duration-500 hover:-translate-y-3"></div>

    </div>
  );
} 