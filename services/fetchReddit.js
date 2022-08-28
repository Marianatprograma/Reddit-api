

async function fetchReddit() {
    const response = await fetch('https://www.reddit.com/reddits.json');
    const jsonData = await response.json()
    
    const { children } = jsonData.data;
    
    let filteredSubreddits = [];


    children.map( subreddit =>{        

        filteredSubreddits.push(
            [
                subreddit.data.id,
                subreddit.data.title,
                subreddit.data.subscribers,
                subreddit.data.public_description,
                subreddit.data.header_img,
                subreddit.data.restrict_commenting,
            ])

    })
    
    return filteredSubreddits;
}

module.exports = fetchReddit;



