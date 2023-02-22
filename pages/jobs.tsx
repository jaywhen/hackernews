import type { GetStaticProps, NextPage } from 'next';
import { getStoriesByCategory, REVALIDATE } from '../lib';
import StoryList from '../components/StoryList';
import { NavItemName, StoryData } from '../types';
import useScrollTo from '../hooks/useScrollTo';

const Jobs: NextPage<{ stories: StoryData[] }> = ({ stories }) => {
  useScrollTo(NavItemName.Ask.toLowerCase());

  return <StoryList stories={stories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('job');

  return {
    props: {
      stories: stories == undefined ? [] : stories,
    },
    revalidate: REVALIDATE,
  };
};

export default Jobs;
