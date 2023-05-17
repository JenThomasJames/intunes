import React from "react";
import Button from "./Button";

const Downloader = () => {
  const checkVideoHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="mx-5 rounded-lg bg-gradient-to-r from-[#c2e59c] to-[#64b3f4] py-12 md:py-28 px-10 flex flex-col gap-4 justify-center items-center">
      <h1 className="text-slate-100 text-md md:text-xl lg:text-2xl xl:text-4xl font-extrabold">
        Explore our No-Cost and Ad-Free YouTube Video Downloader
      </h1>
      <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg">
        Automatically fetch the best available audio/video quality for each
        video
      </p>
      <form
        className="w-full flex flex-col sm:flex-row gap-2"
        onSubmit={checkVideoHandler}
      >
        <input
          className="py-3 text-xs sm:text-sm md:text-md flex-1 rounded text-center"
          type="text"
          name="link"
          id="link"
          placeholder="Paste a YouTube Video Link"
        />
        <Button variant="contained">Validate Video</Button>
      </form>
    </div>
  );
};

export default Downloader;
