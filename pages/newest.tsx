import type { GetStaticProps, NextPage } from 'next'
import { getStoriesByCategory } from '../lib'
import { testStories } from '../test'
import StoryList from '../components/StoryList'

const Newest: NextPage = ({stories}:any) => {
  return (
    <StoryList stories={stories} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const stories = await getStoriesByCategory('newstories');
  // const stories = testStories;
  return {
    props: {
      stories: stories == undefined ? [] : stories
    },
    revalidate: 21600,
  }
}

export default Newest;