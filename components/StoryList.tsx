import Story from "./Story";

const StoryList = ({stories}:any) => {
  return (
  <div className="px-2">
    {stories.map((story: any) => {
      return (
        <div key={story.id}>
          <Story {...story} />
        </div>
      )
    })}
  </div>)
}

export default StoryList;