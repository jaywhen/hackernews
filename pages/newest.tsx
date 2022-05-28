import type { GetStaticProps, NextPage } from 'next'
import { getStoriesByCategory, REVALIDATE } from '../lib'
import { testStories } from '../test'
import StoryList from '../components/StoryList'
import { StoryData } from '../types'

const Newest: NextPage<{ stories: StoryData[] }> = ({ stories }) => {
  return (
    <StoryList stories={stories} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('new');
  // const stories = testStories;
  return {
    props: {
      stories: stories == undefined ? [] : stories
    },
    revalidate: REVALIDATE,
  }
}

export default Newest;