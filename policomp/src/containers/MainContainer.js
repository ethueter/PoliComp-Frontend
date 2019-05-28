import React from 'react';
import StoryContainer from './StoryContainer';
import {  Grid, Divider, Segment} from 'semantic-ui-react';
import _ from 'lodash'
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

//    displayStory = () => {
//        return this.state.headlines.filter(article => article.read)
//    }
    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    filteredArticles() {
        let searched = this.state.search
        let searchedArticles = this.state.headlines.filter(headline => {
            return headline.description.toLowerCase().includes(searched)
        })
        return searchedArticles
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
        // loadArticle(selectedStory)

    }

    render() {

        return(
            <div>

                <div>
                    <Segment>
                        <Search handleChange={this.handleChange}/>
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
