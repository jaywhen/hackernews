import type { GetStaticProps, NextPage } from 'next'
import { getStoriesByCategory } from '../lib'
import Story from '../components/Story'

const Jobs: NextPage = ({stores}:any) => {
  return (
    <div>
      {stores.map((story:any) => {
        return (
          <div key={story.id}>
            <Story {...story} />
          </div>
        )
      })}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const stores = await getStoriesByCategory('jobstories');
  // const stores = testStores;
  return {
    props: {
      stores: stores == undefined ? [] : stores
    }
  }
}

export default Jobs;