import React from 'react'
import Explore from '../../Components/Explore/Explore'
import Feed from '../../Components/Feed/Feed'
import Trends from '../../Components/Trends/Trends'

function LandingPage(props) {

    const trendingComponent = [
  {
    heading: "Happy Janmashtami! 🎉",
    description:
      "Happy Janmashtami to everyone celebrating",
    img: "https://pbs.twimg.com/semantic_core_img/1560202951091638273/3cXqWDFQ?format=jpg&name=120x120",
    tags: ["#gokulashtami ","#janmashtami"],
  },
  {
    heading: "Apple",
    description: "",
    img: "",
    tags: ["#appleDay"],
    tweets: 12345,
  },
  {
    heading: "IRCTC",
    description: "IRCTC is in news again",
    img: "",
    tags: ["#irctc"],
  },
  {
    heading: "War in Ukraine",
    description: "Latest updates on the war in Ukraine",
    img: "",
    tags: [],

  }
];

	return (
		<div className="flex">
            <Explore />
            <Feed props={props}/>
            <Trends trendingComponent= {trendingComponent} />
		</div>
	)
}

export default LandingPage
