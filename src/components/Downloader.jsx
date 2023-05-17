import { useState } from "react";
import useHttp from "../hooks/use-http";
import Button from "./Button";
import Spinner from "./Spinner";
import Toast from "./Toast";

const Downloader = () => {
  const [videoLink, setVideoLink] = useState("");
  const [videoMeta, setVideoMeta] = useState({});

  const {
    isLoading: isValidatingVideo,
    error: validateVideoError,
    fireRequest: validateVideo,
    setError: updateValidateVideoErrorError,
  } = useHttp();
  const {
    isLoading: isGettingMetaInfo,
    error: getMetaInfoError,
    fireRequest: getMetaInfo,
    setError: updateGetMetaInfoError,
  } = useHttp();

  const extractVideoID = () => {
    if (!videoLink.includes("v=")) {
      const pathSegments = videoLink.split("/");
      return pathSegments[pathSegments.length - 1];
    } else {
      return videoLink.split("=")[1];
    }
  };

  const videoLinkChangeHandler = (event) => {
    setVideoLink(event.target.value);
  };

  const checkVideoHandler = async (event) => {
    event.preventDefault();
    if (videoLink === "" || !videoLink) return;
    const videoId = extractVideoID();
    const validateLinkconfig = {
      url: "http://localhost:8000/validate/" + videoId,
    };
    await validateVideo(validateLinkconfig);
    const getMetaInfoConfig = {
      url: "http://localhost:8000/validate/meta/" + videoId,
    };
    const metaInfo = await getMetaInfo(getMetaInfoConfig);
    setVideoMeta(metaInfo);
  };

  return (
    <>
      {(isValidatingVideo || isGettingMetaInfo) && <Spinner />}
      {validateVideoError.isError && (
        <Toast updateError={updateValidateVideoErrorError}>
          {validateVideoError.error}
        </Toast>
      )}
      {getMetaInfoError.isError && (
        <Toast updateError={updateGetMetaInfoError}>
          {getMetaInfoError.error}
        </Toast>
      )}
      <div className="mx-5 rounded-lg bg-gradient-to-r from-[#c2e59c] to-[#64b3f4] py-12 md:py-28 px-10 flex flex-col gap-4 justify-center items-center">
        <h1 className="text-slate-100 text-md md:text-xl lg:text-2xl xl:text-4xl font-extrabold">
          Explore our No-Cost and Ad-Free YouTube Video Downloader
        </h1>
        <p className="text-white text-xs md:text-sm lg:text-base xl:text-lg">
          Automatically fetch the best available audio/video quality for each
          video
        </p>
        <form className="w-full flex flex-col sm:flex-row gap-2">
          <input
            className="py-3 text-xs sm:text-sm md:text-md flex-1 rounded text-center"
            type="text"
            name="link"
            id="link"
            placeholder="Paste a YouTube Video Link"
            onChange={videoLinkChangeHandler}
          />
          <Button type="submit" onClick={checkVideoHandler} variant="contained">
            Validate Video
          </Button>
        </form>
      </div>
    </>
  );
};

export default Downloader;
