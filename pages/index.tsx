import type { GetStaticProps, NextPage } from 'next'
import StoryList from '../components/StoryList'
import { getStoriesByCategory, REVALIDATE } from '../lib'
import { testStories } from '../test'
import { StoryData } from '../types'

const Index: NextPage<{ stories: StoryData[] }> = ({ stories }) => {
  return (
    <StoryList stories={stories} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('top');
  // const stories = testStories;
  return {
    props: {
      stories: stories == undefined ? [] : stories
    },
    revalidate: REVALIDATE,
  }
}

export default Index;
