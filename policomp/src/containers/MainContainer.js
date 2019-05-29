import React from 'react';
import StoryContainer from './StoryContainer';
import {  Grid, Divider, Segment} from 'semantic-ui-react';
import _ from 'lodash'
import FullStory from '../components/FullStory';
// import loadArticle from '../components/Calls';
import ArticleSearch from '../components/Search'

const key = '9663743b34524026854a945d187b6f6e'
const domains = 'foxnews.com,huffpost.com,cnn.com,nytimes.com,washingtontimes.com,apnews.com,npr.com,aljazeera.com,brietbart.com,nationalreview.com,drudgereport.com,reuters.com'


class MainContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            headlines: [],
            readStory: [],
            mainStory: {},
            filtered: [],
            search: ''


        }
    }


    componentDidMount() {
        fetch(`https://newsapi.org/v2/everything?q=trump&domains=${domains}&language=en&sortby=publishedAt&pageSize=100&apiKey=${key}`)
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
    }



    handleSearch = (e) => {
        console.log('search', e.target.value)
        this.setState({
            search: e.target.value
        })
        this.filterArticles()
    }

    filterArticles = () => {
        let search_params = this.state.search
        fetch(`https://newsapi.org/v2/everything?q=${search_params}&domains=${domains}&language=en&sortby=publishedAt&pageSize=50&apiKey=${key}`)
            .then(res => res.json())
            .then(articles => {

                let newList = articles.articles.map(article => {
                    return {
                        ...article,
                        read: false
                    }
                })
                let nonDupList = _.uniqBy(newList, 'title')
                this.setState({ filtered: nonDupList })
            })

        

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
                        <Grid columns={2}>

                            <Grid.Column width={8}>
                                <h1>Today's Top Stories:</h1>
                                <StoryContainer articles={this.state.headlines} handleRead={this.handleRead}/>
                            </Grid.Column>

                            <Grid.Column width={8}>
                                <p>Select a story from the left or search for a new one. Click Read It to view the whole article and rate it to see the source!</p>
                                <ArticleSearch handleSearch={this.handleSearch} />
                                <Segment className="search-results">
                                    <h3>Search Results</h3>
                                    <StoryContainer articles={this.state.filtered} handleRead={this.handleRead} />

                                </Segment>
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
