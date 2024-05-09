const CreateResume = () => {
  return (
    <div className="flex justify-between">
      <div className="border-8 w-[50%]">
        <form className="flex flex-col">
            <input type="text" id="name" placeholder="Enter your Full Name" />
            <input
              type="email"
              id="email"
              placeholder="Enter your Emali Id here"
            />
            <input
              type="number"
              id="number"
              placeholder="Enter your Mobile Numebr here"
            />
            <input
              type="url"
              id="linkedIn"
              placeholder="Paste your linkedin url here"
            />
            <input
              type="url"
              id="gitHub"
              placeholder="Paste your github url here"
            />
        </form>
      </div>
      <div className="border-8 w-[50%]">playground</div>
    </div>
  );
};

export default CreateResume;
