const CreateResume = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[50%]">
        <form className="flex flex-col p-4">
          <fieldset className="border-2 border-slate-200 rounded-md">
            <legend className="font-semibold font-notoSans p-2 text-xl ml-4">
              Personal Info
            </legend>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="tel"
              id="tel"
              placeholder="Mobile Numebr "
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="url"
              id="linkedIn"
              placeholder="Linkedin URL "
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="url"
              id="gitHub"
              placeholder="GitHub URL"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
          </fieldset>
          <br />
          <fieldset className="border-2 border-slate-200 rounded-md">
            <legend className="font-semibold font-notoSans p-2 text-xl ml-4">
              Technical Skills
            </legend>
            <input
              type="text"
              id="language"
              placeholder="Languages"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="text"
              id="technologies"
              placeholder="Technologies"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
          </fieldset>
          <br />
          <fieldset className="border-2 border-slate-200 rounded-md">
            <legend className="font-semibold font-notoSans p-2 text-xl ml-4">
              Experience
            </legend>
            <input
              type="text"
              id="role"
              placeholder="Role"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="text"
              id="position"
              placeholder="Position"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <label htmlFor="" className="p-2">
              Duration:- From{" "}
              <input
                type="month"
                id="from"
                className="border-2 border-slate-200 rounded-md"
              />{" "}
              to{" "}
              <input
                type="month"
                id="to"
                className="border-2 border-slate-200 rounded-md"
              />
            </label>
            <br />
            <textarea
              name="aboutRole"
              id="aboutRole"
              placeholder="About your role and contribution"
              cols={100}
              rows={2}
              className="p-2 m-2 border-b-2 border-b-slate-400"
            ></textarea>
          </fieldset>
          <br />
          <fieldset className="border-2 border-slate-200 rounded-md">
            <legend className="font-semibold font-notoSans p-2 text-xl ml-4">
              Project
            </legend>
            <input
              type="text"
              id="projectName"
              placeholder="Project Name"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="text"
              id="TechLang"
              placeholder="Technology & Languages Used"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <br />
            <textarea
              name="aboutProject"
              id="aboutProject"
              placeholder="About Project"
              cols={100}
              rows={2}
              className="p-2 m-2 border-b-2 border-b-slate-400"
            ></textarea>
          </fieldset>
          <br />
          <fieldset className="border-2 border-slate-200 rounded-md">
            <legend className="font-semibold font-notoSans p-2 text-xl ml-4">
              Education
            </legend>
            <input
              type="text"
              id="schoolName"
              placeholder="School Name"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="number"
              id="cpga"
              placeholder="CGPA/10"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
            <input
              type="text"
              id="domain"
              placeholder="Domain"
              className="p-2 m-2 border-b-2 border-b-slate-400"
            />
          </fieldset>

          <button className="flex place-items-center gap-2 rounded-lg border-2 p-3 text-white font-semibold bg-blue-600 hover:bg-blue-500 border-blue-600 justify-center mt-4">
            <input type="submit" value="" />
            Create Resume
          </button>
        </form>
      </div>
      <div className="border-l-2 w-[50%] p-4">
        <img src="/resumeImg.jpg" alt="" />
        <button className="flex place-items-center w-full gap-2 rounded-lg border-2 p-3 text-white font-semibold bg-rose-600 hover:bg-rose-500 justify-center mt-4">Download</button>
      </div>
    </div>
  );
};

export default CreateResume;
