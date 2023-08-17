import React from 'react';
import Header from '../components/Header.jsx';
import Body from '../components/Body.jsx';

const NewsReader = () => {
    const [stories, setStories] = React.useState({'sports':[],'news':[],'gaming':[],'tech':[]});
    const [loading, setLoading] = React.useState(true);
    const [activeStories, setActiveStories] = React.useState([]); 
    const [category, setCategory] = React.useState('');
    
    // fetch news stories on load
    React.useEffect(() => {
        async function fetchNews() {
            try {
                const response = await fetch('/getNews');
                const data = await response.json();
                setStories(data.results);
                setCategory('1');
                setLoading(false);
                getCategory();
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        }
        fetchNews();
        
    }, []);
    // map selected category to news stories
    const getCategory = () => {
        switch (category) {
            case '1':
                setActiveStories(stories['news']);
                return;
            case '2':
                setActiveStories(stories['sports']);
                return 
            case '3':
                setActiveStories(stories['gaming']);
                return 
            case '4':
                setActiveStories(stories['tech']);
                return 
            default:
                setActiveStories(stories['news']);
                return 
        }
    };
    // filter news stories by category    
    React.useEffect(() => {
        getCategory();
    }, [category]);

    return (
        <div>
            <h1>NewsReader</h1>
            <Header category= {category} setCategory={setCategory} />  
            {loading ? <h1>Loading...</h1>: <Body stories={activeStories}/>}
        </div>
    );
}

export default NewsReader