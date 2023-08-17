import React from "react";
import NewsCard from "./NewsCard.jsx";

const Body = (props) => {
    const [visitedStories, setVisitedStories] = React.useState([]);

    const isVisited = (storyURL) => {
        return visitedStories.includes(storyURL); // Use story.id to check if a story is visited
    };

    const handleLinkClick = (storyURL) => {
        if (!isVisited(storyURL)) {
            setVisitedStories([...visitedStories, storyURL]) // Use story.id to mark a story as visited
        }
    };

    const newsCards = props.stories.map((story) => {
        return (
            <NewsCard 
                key={story.id} 
                className={isVisited(story.url) ? 'visited' : ''} // Pass the entire story object to isVisited
                story={story} 
                handleLinkClick={handleLinkClick}
            />
        );
    });

    return (
        <div className="newsBody">
            <h1>Body</h1>
            {newsCards}
        </div>
    );
}

export default Body;
