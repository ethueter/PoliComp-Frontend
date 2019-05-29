import React from 'react';

// const key = '9663743b34524026854a945d187b6f6e'
// const poliFilter = '%27Trump%20AND%20Republican%20AND%20Democrat%20AND%20Congress%20AND%20Senate%20AND%20Mueller%20AND%20political%20AND%202020%20AND%20campaign%20AND%20candidate%20AND%20election%27'
// const domains = 'foxnews.com,huffpost.com,cnn.com,nytimes.com,washingtonpost.com,washingtontimes.com,apnews.com,npr.com,aljazeera.com,brietbart.com,nationalreview.com,drudgereport.com,reuters.com'






const newUserArticle = (props) => {
    
    let newUserArticle = {
        user_id: localStorage.getItem("current_user_id"),
        article_id: props.article.id,
        favorite: false,
        rating: props.articleRating,
        visable: true
    }

    fetch('http://localhost:3000/api/users_articles', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Access-Token' : localStorage.getItem("token")
        },
        body: JSON.stringify(newUserArticle)
    })
    .then(res => res.json())
    .then(userStoryNew => console.log('after db', userStoryNew))

}


export default newUserArticle
