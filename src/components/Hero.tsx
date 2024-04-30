import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="bg-purple-100 pl-40 pr-40">
      <section className="max-w-2xl ml-auto mr-auto pt-4 flex flex-col place-items-center justify-center font-bold font-roboto">
        <p className="uppercase font-medium text-xs font-sans text-slate-600 pt-4 pb-4">
          Best online resume builder.
        </p>
        <p className="text-slate-900 text-4xl mr-40 pl-8">Your success</p>
        <p className="text-slate-900 text-4xl ml-40">Story begins</p>
        <p className="text-slate-900 text-4xl">
          with a <span className="text-blue-600">resume</span>
        </p>

        <button className="bg-blue-600 text-white font-semibold rounded-lg p-2 pr-5 pl-5 mt-5 mb-5 flex place-items-center gap-2">
          View Templates <FaLongArrowAltRight opacity={0.7} />
        </button>

        <img
          src="/heroImg.jpg"
          alt="sampleHero"
          className="rounded-lg"
          width="600"
          height="800"
        />
      </section>
    </main>
  );
};

export default Hero;
