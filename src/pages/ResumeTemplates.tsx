const ResumeTemplates = () => {
  return (
    <div className="ml-[340px] mr-[340px] mt-10">
      <p className="flex justify-center text-4xl font-notoSans font-semibold text-slate-700">
        Select a Template
      </p>
      <p className="flex justify-center text-xs mt-2 font-notoSans text-slate-500">
        Choose from world's best Resume Template
      </p>

      <div className="grid grid-cols-4 gap-10 mt-8">
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
        <div className="transform transition-transform duration-1000 cursor-pointer hover:scale-150">
          <img src="/resumeImg.jpg" alt="" />
        </div>
      </div>

      <div className="flex justify-center mt-4 mb-4">
        <button className="flex justify-center gap-2 rounded-xl border-2 p-3 text-blue-600 hover:text-white font-semibold hover:bg-blue-600 border-blue-600">
          Go with Default Template
        </button>
      </div>
    </div>
  );
};

export default ResumeTemplates;
