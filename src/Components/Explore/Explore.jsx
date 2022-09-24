import React from 'react'

const menuItems = ["Home", "Explore", "Notification", "Messages", "Bookmarks", "Lists", "Profile", "More"]

function Explore() {
	return (
		<div className="w-1/4 border-r border-gray-700">
			<div className="w-36 fixed left-32">
                <div className='flex-col font-semibold'>
                    <div className="p-4"><img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/twitter-icon-18-256.png" className="w-1/5 " /></div>
                    {menuItems.map((elem, key)=>{
                        // console.log(elem)
                        return <div key={key} className="p-4 hover:bg-gray-900 hover:rounded-full cursor-pointer">{elem}</div>
                    })}
                    <button className="px-8 py-2 bg-[#1DA1F2] rounded-full">Tweet</button>
                </div>
            </div>
		</div>
	)
}

export default Explore
