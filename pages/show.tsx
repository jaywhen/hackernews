import type { GetStaticProps, NextPage } from 'next';
import { getStoriesByCategory, REVALIDATE } from '../lib';
import StoryList from '../components/StoryList';
import { NavItemName, StoryData } from '../types';
import useScrollTo from '../hooks/useScrollTo';

const Show: NextPage<{ stories: StoryData[] }> = ({ stories }) => {
  useScrollTo(NavItemName.Show.toLowerCase());

  return <StoryList stories={stories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('show');

  return {
    props: {
      stories: stories == undefined ? [] : stories,
    },
    revalidate: REVALIDATE,
  };
};

export default Show;
