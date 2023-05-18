import { MdAccessAlarm } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";
import { MdVerified } from "react-icons/md";
import Button from "./Button";

const getMinutesAndSeconds = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const formattedMins = mins < 10 ? `0${mins}` : mins;
  const formattedSecs = secs < 10 ? `0${secs}` : secs;
  return `${formattedMins}:${formattedSecs}`;
};

const VideoMeta = ({ data }) => {
  return (
    <div className="flex w-full lg:w-3/4 flex-col rounded-lg">
      <iframe
        title="playback"
        className="min-w-full h-72"
        src={data.embed.iframeUrl}
      ></iframe>
      <div className="flex max-w-full flex-col gap-4 bg-white rounded-b-lg p-3">
        <h1 className="font-bold text-sm md:text-lg text-slate-700">
          {data.title}
        </h1>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <MdAccessAlarm size={25} color="grey" />
            <p className="text-slate-500 text-xs md:text-sm lg:text-base">
              {getMinutesAndSeconds(data.lengthSeconds)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <MdPersonOutline size={25} color="grey" />
            <p className="text-slate-500 font-semibold text-xs md:text-sm lg:text-base">
              {data.author.name}
            </p>
            {data.author.verified && <MdVerified color="#1DA1F2" size={25} />}
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <Button>Download Audio</Button>
          <Button>Download Video</Button>
        </div>
      </div>
    </div>
  );
};

export default VideoMeta;
