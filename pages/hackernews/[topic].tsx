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
    'top', 'new', 'ask', 'show', 'job'
  ];
  return {
    paths: topics.map((t) => ({
      params: { topic: t }
    })),
    fallback: 'blocking',
  }
}

interface Props extends ParsedUrlQuery {
  topic: string
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { topic } = params as Props;
  const stories = await getStoriesByCategory(topic);
  return {
    props: {
      stories
    },
    revalidate: REVALIDATE
  }
}

export default HackerNews;
