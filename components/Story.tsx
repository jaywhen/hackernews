type Props = {
  id: number,
  by: string,
  title: string,
  url: string,
  hostname: string,
  time: string,
  score: number,
}


const Story = (props: Props) => {
  return (
    <div className="p-2 my-4 flex justify-between sm:hover:shadow-md sm:hover:shadow-[#ff66004c] hover:rounded-[15px] transition ease-in-out delay-50 sm:hover:-translate-y-1 sm:hover:scale-110 duration-300">
      <div className="w-4/5">
        <div className="w-11/12 font-bold text-lg break-words">
          <a href={props.url} target='_blank' rel="noreferrer">{props.title}</a>
        </div>
        <div className="text-sm"><span className="text-[#FF6600] font-bold">{props.score}</span>{` points by ${props.by} • (${props.hostname})`}</div>
      </div>
      <div className="text-gray-600 font-bold">{props.time}</div>
    </div>
  )
}

export default Story;