import Carousal from "../components/Carousal";

const ResumePage = () => {
  return (
    <>
      <div className="mt-10 font-semibold font-notoSans">
        <h1 className="max-w-fit mr-auto ml-auto text-4xl leading-normal">
          <p>Pick one of many world-class Templates </p>
          <p className="ml-14">and build your resume in mintues</p>
        </h1>
        {/* <img src="/resumeImg.jpg" alt="resume template" width={400} /> */}
        <Carousal/>
      </div>
      <div className="max-w-fit mr-auto ml-auto">
        <button className="flex place-items-center gap-2 rounded-lg border-2 p-3 text-blue-600 hover:text-white font-semibold hover:bg-blue-600 border-blue-600 justify-center">
          View All Templates
        </button>
      </div>
    </>
  );
};

export default ResumePage;
