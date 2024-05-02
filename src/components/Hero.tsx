import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="bg-purple-100 sm:pl-40 sm:pr-40 pl-10 pr-10 flex">
      <section className="max-w-2xl ml-auto mr-auto pt-4 flex flex-col place-items-center justify-center font-semibold font-notoSans leading-loose">
        <p className="uppercase font-medium text-xs font-sans text-slate-600 pt-4 pb-4">
          Best online resume builder.
        </p>
        <p className="text-slate-800 text-4xl">Your success story </p>
        <p className="text-slate-800 text-4xl">
          begins with a <span className="text-blue-600">resume</span>.
        </p>

        <div className="font-light mt-5 leading-7 text-slate-600 ">
          <p>Craft your perfect resume. Stand out.</p>
          <p>Get hired. Start building your future today!</p>
        </div>

        <button className="bg-blue-600 text-white font-semibold rounded-lg p-2 pr-5 pl-5 mt-8 mb-8 flex place-items-center gap-2">
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
