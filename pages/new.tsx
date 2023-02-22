import type { GetStaticProps, NextPage } from 'next';
import { getStoriesByCategory, REVALIDATE } from '../lib';
import StoryList from '../components/StoryList';
import { NavItemName, StoryData } from '../types';
import useScrollTo from '../hooks/useScrollTo';

const New: NextPage<{ stories: StoryData[] }> = ({ stories }) => {
  useScrollTo(NavItemName.New.toLowerCase());

  return <StoryList stories={stories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('new');

  return {
    props: {
      stories: stories == undefined ? [] : stories,
    },
    revalidate: REVALIDATE,
  };
};

export default New;
