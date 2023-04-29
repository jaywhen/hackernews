import type { GetStaticProps, NextPage } from 'next';
import StoryList from '../components/StoryList';
import { getStoriesByCategory, REVALIDATE } from '../lib';
import { NavItemName, StoryData } from '../types';
import useScrollTo from '../hooks/useScrollTo';

const Index: NextPage<{ stories: StoryData[] }> = ({ stories }) => {
  useScrollTo(NavItemName.Index.toLowerCase());

  return <StoryList stories={stories} />;
};

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('top');

  return {
    props: {
      stories: stories == undefined ? [] : stories,
    },
    revalidate: REVALIDATE,
  };
};

export default Index;
