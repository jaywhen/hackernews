import type { GetStaticProps, NextPage } from 'next'
import { getStoriesByCategory, REVALIDATE } from '../lib'
import { testStories } from '../test'
import StoryList from '../components/StoryList'
import { StoryData } from '../types'

const Ask: NextPage<{ stories: StoryData[] }> = ({ stories }) => {
  return (
    <StoryList stories={stories} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('ask');
  // const stories = testStories;
  return {
    props: {
      stories: stories == undefined ? [] : stories
    },
    revalidate: REVALIDATE,
  }
}

export default Ask;
