import Link from 'next/link';
import { StoryData } from '../types';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { HTMLResponse } from '../types/link-preview';

const Story = (story: StoryData) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cardInfo, setCardInfo] = useState<HTMLResponse>();

  const getRenderableImage = (imgs: string[]) => {
    return [
      imgs.find(
        (img) =>
          img.endsWith('.png') || img.endsWith('.jpg') || img.endsWith('.webp')
      ) || 'no img',
    ];
  };

  const onClickStory = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    setIsOpen(true);
    const response = await fetch(`/api/link-preview?url=${story.url}`);
    const data = (await response.json()) as HTMLResponse;

    if (!data.description) {
      data.description = story.url;
    }

    if (!data?.images?.length) {
      data.images = ['no img'];
    }

    if (data.images.length) {
      data.images = getRenderableImage(data.images);
    }

    setCardInfo(data);
  };

  return (
    <div
      onClick={onClickStory}
      className="p-2 my-4 flex justify-between lg:hover:shadow-md lg:hover:shadow-[#ff66004c] lg:hover:cursor-pointer lg:hover:-translate-y-1 lg:hover:scale-110 hover:rounded-[15px] transition ease-in-out delay-50 duration-300"
    >
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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[620px] h-[460px] transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all">
                  <div className="w-full h-full flex flex-col justify-between">
                    <div className="w-full h-[310px]">
                      {cardInfo?.images?.length &&
                      cardInfo?.images[0] === 'no img' ? (
                        <div
                          style={{
                            background:
                              'linear-gradient(135deg, rgb(255, 223, 152), rgb(168, 78, 0))',
                          }}
                          className="w-full h-full"
                        ></div>
                      ) : cardInfo?.images?.length ? (
                        <img
                          className="w-full h-full object-cover"
                          src={cardInfo?.images ? cardInfo?.images[0] : ''}
                        />
                      ) : (
                        <div className="w-full h-full bg-slate-200 animate-pulse"></div>
                      )}
                    </div>
                    <div className="w-full h-[140px] p-6 flex flex-col justify-between">
                      <div className="text-link truncate flex-1">
                        <a
                          href={story.url}
                          target="_blank"
                          rel="noreferrer"
                          className="focus:outline-none"
                        >
                          🔗 {story.hostname}
                        </a>
                      </div>
                      <div className="w-full text-link-title truncate flex-1">
                        {story.title}
                      </div>
                      {cardInfo?.description ? (
                        <div className="text-link-desc line-clamp-2 flex-2">
                          {cardInfo?.description}
                        </div>
                      ) : (
                        <div className="h-10 rounded-sm bg-slate-200 animate-pulse"></div>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Story;
