import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import StoryList from "../../components/StoryList";
import { getStoriesByCategory, REVALIDATE } from "../../lib";
import { StoryData } from "../../types";

const HackerNews: NextPage<{ stories: StoryData[] }> = ({ stories }) => {
  return (
    <StoryList stories={stories} />
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const topics = [
    'index', 'newest', 'ask', 'show', 'jobs'
  ];
  return {
    paths: topics.map((t) => ({
      params: { topic: t }
    })),
    fallback: 'blocking',
  }
}

interface Props extends ParsedUrlQuery {
  category: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as Props;
  const stories = await getStoriesByCategory(category);
  return {
    props: {
      stories
    },
    revalidate: REVALIDATE
  }
}

export default HackerNews;
