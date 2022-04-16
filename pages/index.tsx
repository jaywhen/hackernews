import type { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import Story from '../components/Story'
import { getStoriesByCategory } from '../lib'
import { testStores } from '../test'

const Index: NextPage = ({stores}:any) => {
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
  const stores = await getStoriesByCategory('topstories');
  // const stores = testStores;
  return {
    props: {
      stores: stores == undefined ? [] : stores
    }
  }
}

export default Index;
