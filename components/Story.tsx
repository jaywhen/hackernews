import Link from 'next/link';
import { StoryData } from '../types';

const Story = (story: StoryData) => {
  return (
    <div className="p-2 my-4 flex justify-between lg:hover:shadow-md lg:hover:shadow-[#ff66004c] lg:hover:-translate-y-1 lg:hover:scale-110 hover:rounded-[15px] transition ease-in-out delay-50 duration-300">
      <div className="w-4/5">
        <div className="w-11/12 font-bold text-lg break-words">
          <a href={story.url} target="_blank" rel="noreferrer">
            {story.title}
          </a>
        </div>
        <div className="text-sm">
          <span className="text-[#FF6600] font-bold">{story.score}</span>
          &nbsp;points by&nbsp;
          <span className="hover:underline">
            <Link href={`/user/${story.by}`}>{story.by}</Link>
          </span>
          {` • (`}
          <a
            className="hover:underline"
            href={`https://${story.hostname}`}
            target="_blank"
            rel="noreferrer"
          >
            {story.hostname}
          </a>
          {`)`}
        </div>
      </div>
      <div className="text-gray-600 font-bold">{story.time}</div>
    </div>
  );
};

export default Story;
