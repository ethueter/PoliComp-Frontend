import React from 'react';
import StoryContainer from './StoryContainer';
import {  Grid, Divider, Segment} from 'semantic-ui-react';
import _ from 'lodash'

import FullStory from '../components/FullStory';

import loadArticle from '../components/Calls';
import Search from '../components/Search.js'



const key = '9663743b34524026854a945d187b6f6e'
const domains = 'foxnews.com,huffpost.com,cnn.com,nytimes.com,washingtontimes.com,apnews.com,npr.com,aljazeera.com,brietbart.com,nationalreview.com,drudgereport.com,reuters.com'


class MainContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            headlines: [],
            readStory: [],

            mainStory: {}

            filtered: [],
            search: ''


        }
    }


    componentDidMount() {
        fetch(`https://newsapi.org/v2/everything?q=political&domains=${domains}&language=en&sortby=publishedAt&pageSize=100&apiKey=${key}`)
        .then(res => res.json())
            .then(articles => {

                let newList = articles.articles.map(article =>{
                    return { ...article,
                        read: false}
                })
                let nonDupList = _.uniqBy(newList, 'title')
                this.setState({ headlines: nonDupList })})
    }


    loadArticle = (story) => {

        let newArticle = {
            title: story.title,
            author: story.author,
            content: story.content,
            source_id: story.source.id
        }
        fetch('http://localhost:3000/api/articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Token': localStorage.getItem("token")
            },
            body: JSON.stringify(newArticle)
        })
            .then(res => res.json())
            .then(loadedStory => this.setState({mainStory: loadedStory}))


//    displayStory = () => {
//        return this.state.headlines.filter(article => article.read)
//    }
    handleSearch = () => {

        this.setState({
            search: e.target.value
        })
        filterArticles()
    }
// let url = 'https://newsapi.org/v2/everything?' +
//     'q=Apple&' +
//     'from=2019-05-28&' +
//     'sortBy=popularity&' +
//     'apiKey=API_KEY';

// let req = new Request(url);

// fetch(req)
//     .then(response  {
//         console.log(response.json());
//     })

    filterArticles = () => {
        let search_params = this.state.search
        fetch(`https://newsapi.org/v2/everything?q=${search_params}&domains=${domains}&language=en&sortby=publishedAt&pageSize=100&apiKey=${key}`)
            .then(res => res.json())
            .then(articles => {

                let newList = articles.articles.map(article => {
                    return {
                        ...article,
                        read: false
                    }
                })
                let nonDupList = _.uniqBy(newList, 'title')
                this.setState({ headlines: nonDupList })
            })

        // })
        // return searchedArticles

    }


    handleRead = (selectedStory) => {
        console.log('read', selectedStory)
        let readList = this.state.headlines.map(article => {
            if (article.title == selectedStory.title) {
                article.read = true
                return article
            } else
            return article
        })
        this.setState({ headlines: readList})

        this.loadArticle(selectedStory)
        

    }

    render() {

        return(
            <div>

                { this.state.mainStory.id ? <FullStory article={this.state.mainStory}/> : null }



                <div>
                    <Segment>
                        <Search handleSearch={this.handleSearch}/>
                    </Segment>
                    <Segment>
                        <Grid columns={2}>

                            <Grid.Column width={8}>
                                <StoryContainer articles={this.state.headlines} handleRead={this.handleRead}/>
                            </Grid.Column>

                            <Grid.Column width={8}>
                                <p>This is just testing out spacing and will be where site instructions go.</p>
                            </Grid.Column>

                        </Grid>
                    <Divider vertical></Divider>
                    </Segment>
                </div>
            </div>


        )
    }
}

export default MainContainer
