import React from 'react';

// const key = '9663743b34524026854a945d187b6f6e'
// const poliFilter = '%27Trump%20AND%20Republican%20AND%20Democrat%20AND%20Congress%20AND%20Senate%20AND%20Mueller%20AND%20political%20AND%202020%20AND%20campaign%20AND%20candidate%20AND%20election%27'
// const domains = 'foxnews.com,huffpost.com,cnn.com,nytimes.com,washingtonpost.com,washingtontimes.com,apnews.com,npr.com,aljazeera.com,brietbart.com,nationalreview.com,drudgereport.com,reuters.com'






const loadArticle = (story) => {
    let newArticle = {
        title: story.title,
        author: story.author,
        content: story.content,
        source_id: story.source.id
    }
    fetch('http://localhost:3001/articles', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newArticle)
    })
    .then(res => res.json())
    .then(loadedStory => console.log('after db', loadedStory))

}

const buildSources = (source) => {
    let newSource = {
        id : source.id,
        name: source.name
    }
    fetch('http://localhost:3000/sources', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newSource)
    })
    .then(res => res.json())
    .then(source => console.log(source))
}

const buildUserStory = () => {
    let userStory = {

    }
}

export default loadArticle
