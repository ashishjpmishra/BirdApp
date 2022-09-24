import React,{useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

let allTweets = localStorage.getItem("feed");


function Feed({props}) {

    const {isLoggedIn, setIsLoggedIn, registered, setRegistered} = props
    // console.log(isLoggedIn)
    const loggedIn = JSON.parse(localStorage.getItem("loggedIn"))
    const [val, setVal] = useState("");
    const [tweets, setTweets] = useState(localStorage.getItem("feed") != null ? JSON.parse(localStorage.getItem("feed")) : [] )
    const [editing, setEditing] = useState(false)

    
    let globalId = Math.floor(Math.random()*100);

    const defaultTweets = [
        {postID:globalId, 
        contents:"This is elon", 
        postAuthor: "Elon Musk", 
        createdOn: `${new Date()}`.slice(0,24), 
        updatedOn: 0} ,
        {postID:globalId, 
        contents:"This is Jack", 
        postAuthor: "Jack Dorsey", 
        createdOn: `${new Date()}`.slice(0,24), 
        updatedOn: 0}, 
        {postID:globalId, 
        contents:"This is the age of new Internet", 
        postAuthor: "Vitalik Buterin", 
        createdOn: `${new Date()}`.slice(0,24), 
        updatedOn: 0}
        ]
    

    let userLoggedIn = localStorage.getItem("loggedIn")
    // console.log(tweets)
    
    //initiating tweet storage
    localStorage.setItem("feed", JSON.stringify(tweets))

    const makeTweet = (e) =>{
        setVal(e.target.value)
    }

    const addTweet=(e)=>{
        e.preventDefault();
        console.log(tweets)
        setTweets((old) =>{
            setVal("");
            return [...old, {postID:globalId, contents:val, postAuthor: loggedIn, createdOn: `${new Date()}`.slice(0,24), updatedOn: 0}]
        })
        localStorage.setItem("feed", JSON.stringify(tweets))
            
    }

    const handleLogoOut=()=>{
        setIsLoggedIn(false)
        setRegistered(false)
        localStorage.setItem("loggedIn", "")
    }

    const handleEdit=(id, tweet, user)=>{
        console.log(id,tweet)
        const selectedTweet = tweets.filter((elem) =>{
           return elem.contents === tweet
        })
        console.log(selectedTweet)
        setEditing(true)
        if(user === JSON.parse(userLoggedIn)){
            setVal(selectedTweet[0].contents)
            handleDelete(id, user);
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
        }
        else alert("can't edit other user's tweet")
        
    }
    const handleDelete=(id, user)=>{
        console.log(userLoggedIn)
        console.log(user)
        
       if(user === JSON.parse(userLoggedIn)) setTweets(old=> old.filter(tweet => tweet.postID !== id))
       else alert("can't delete other user's tweet")
    }

	return (
		<div className="w-1/2 border-r border-gray-700">
            <div className="border-b border-gray-700">
            <div className="flex justify-end m-4" onClick={handleLogoOut}><button>Logout</button></div>
                <h1 className="p-4">Home</h1>
                {! editing 
                    ? 
                    (<form onSubmit={addTweet}>
                    <div className="flex p-2"><img className="rounded-full p-2 w-16" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" />
                    <input className="bg-transparent w-full outline-0" type="text" placeholder="What's happening?" value={val} onChange={makeTweet}/> 
                    </div>
                    <div className="flex justify-end m-4"><button className=" px-4 py-2 bg-[#1DA1F2] rounded-full">Tweet</button>
                    </div>
                    </form>)
                    : (<form onSubmit={addTweet}>
                    <div className="flex p-2"><img className="rounded-full p-2 w-16" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" />
                    <input className="bg-transparent w-full outline-0" type="text" placeholder="What's happening?" name="tweetbody" value={val} onChange={makeTweet}/> 
                    </div>
                    <div className="flex justify-end m-4"><button className=" px-4 py-2 bg-[#1DA1F2] rounded-full">Tweet</button>
                    </div>
                    </form>)}
            </div>
            <h1 className="p-2 border-b border-gray-700 hover:bg-gray-900 cursor-pointer"> Recent tweets</h1>
            {/* posted tweets*/}
                {tweets.map((tweet, key)=>{
                    return <div key={key} className="flex border-b border-gray-700 hover:bg-gray-900 cursor-pointer">
                <img className="rounded-full h-8 m-4 w-8" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" />
                    <div className="p-4 w-full">
                        <div className="font-semibold">{tweet.postAuthor}<span className="text-slate-500" > - @{tweet.postAuthor}</span></div>
                        <div>{tweet.contents}</div>
                        <div className="text-slate-500 text-xs my-2 flex justify-end">{tweet.createdOn}</div>
                        <div className="text-white flex justify-between p-4">
                            <div className="p-2 hover:bg-slate-800 rounded-full"><img className="h-4" src="https://img.icons8.com/external-inkubators-glyph-inkubators/25/FFFFFF/external-reply-email-inkubators-glyph-inkubators.png"/></div>
                            <div className="p-2 hover:bg-slate-800 rounded-full"><img className="h-4" src="https://img.icons8.com/ios/50/FFFFFF/loading-heart.png"/></div>
                            {tweet.postAuthor === JSON.parse(userLoggedIn) && <div className="p-2 hover:bg-slate-800 rounded-full" onClick={()=>handleEdit(tweet.postID, tweet.contents, tweet.postAuthor)}><img className="h-4" src="https://img.icons8.com/ios/50/FFFFFF/edit--v1.png"/></div>}
                            {tweet.postAuthor === JSON.parse(userLoggedIn) && <div className="p-2 hover:bg-slate-800 rounded-full" onClick={()=>handleDelete(tweet.postID, tweet.postAuthor)}><img className="h-4" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-trash.png" /></div>}
                        </div>
                    </div>                
                </div>
                }).reverse()}

                {/* Default tweets*/}

                {defaultTweets.map((tweet, key)=>{
                    return <div key={key} className="flex border-b border-gray-700 hover:bg-gray-900 cursor-pointer">
                <img className="rounded-full h-8 m-4 w-8" src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png" />
                    <div className="p-4 w-full">
                        <div className="font-semibold">{tweet.postAuthor}<span className="text-slate-500" > - @{tweet.postAuthor}</span></div>
                        <div>{tweet.contents}</div>
                        <div className="text-slate-500 text-xs my-2 flex justify-end">{tweet.createdOn}</div>
                        <div className="text-white flex justify-between p-4">
                            <div className="p-2 hover:bg-slate-800 rounded-full"><img className="h-4" src="https://img.icons8.com/external-inkubators-glyph-inkubators/25/FFFFFF/external-reply-email-inkubators-glyph-inkubators.png"/></div>
                            <div className="p-2 hover:bg-slate-800 rounded-full"><img className="h-4" src="https://img.icons8.com/ios/50/FFFFFF/loading-heart.png"/></div>
                            {tweet.postAuthor === JSON.parse(userLoggedIn) && <div className="p-2 hover:bg-slate-800 rounded-full" onClick={()=>handleEdit(tweet.postID, tweet.contents, tweet.postAuthor)}><img className="h-4" src="https://img.icons8.com/ios/50/FFFFFF/edit--v1.png"/></div>}
                            {tweet.postAuthor === JSON.parse(userLoggedIn) && <div className="p-2 hover:bg-slate-800 rounded-full" onClick={()=>handleDelete(tweet.postID, tweet.postAuthor)}><img className="h-4" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/filled-trash.png" /></div>}
                        </div>
                    </div>                
                </div>
                }).reverse()}
                <div>
                    
                </div>
                			
		</div>
	)
}

export default Feed
