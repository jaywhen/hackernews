import type { GetStaticProps, NextPage } from 'next'
import StoryList from '../components/StoryList'
import { getStoriesByCategory } from '../lib'
import { testStories } from '../test'

const Index: NextPage = ({stories}:any) => {
  return (
    <StoryList stories={stories} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('topstories');
  // const stories = testStories;
  return {
    props: {
      stories: stories == undefined ? [] : stories
    },
    revalidate: 21600,
  }
}

export default Index;
