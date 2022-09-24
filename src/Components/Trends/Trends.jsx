import React from 'react'

function Trends({trendingComponent}) {
    console.log(trendingComponent)
	return (
		<div className="w-1/4 h-screen fixed right-0">
			<div className="text-center m-8 bg-gray-800 rounded-xl">
            <h1>What's happening</h1>
            <div className="flex-col justify-start items-start">
            {trendingComponent.map((topic)=>{
                return (
                    
                    <div className="text-left p-4 hover:bg-gray-900 cursor-pointer ">
                        <div className="flex">
                        <h1 className="text-xl">{topic.heading}</h1>
                        {topic.img !== "" ? <img src={topic.img} className="w-8 h-8"/> : null}
                        </div>
                        <p className="text-gray-300"> {topic.description}</p>
                        {topic.tags.length !== 0 ? <label className="text-sm text-gray-500">Trending with</label> : null}
                        <div>
                        {topic.tags.map((tag)=>{
                           {console.log(tag)}
                            return <p className="text-[#1DA1F2]">{tag}</p>
                        })}
                        </div>
                        
                    </div>
                )
            })}
            </div>
        </div>
		</div>
	)
}

export default Trends
