import React from 'react';
import NavBar from '../components/NavBar'
import StoryContainer from './StoryContainer';
import { Header} from 'semantic-ui-react'
const key = '9663743b34524026854a945d187b6f6e'
const domains = 'foxnews.com,huffpost.com,cnn.com,nytimes.com,washingtontimes.com,apnews.com,npr.com,aljazeera.com,brietbart.com,nationalreview.com,drudgereport.com,reuters.com'


class MainContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            headlines: []

        }
    }

    componentDidMount() {
        fetch(`https://newsapi.org/v2/everything?q=political&domains=${domains}&language=en&sortby=publishedAt&pageSize=100&apiKey=${key}`)
        .then(res => res.json())
            .then(articles => this.setState({ headlines: articles.articles }))
    }
    
    render() {
        return(
            <div>
            <div>
                <Header as='h1'>Political Compass</Header>
            </div>
            <div>
                <NavBar />          
                <div>
                    <StoryContainer articles={this.state.headlines}/>
                </div>
            </div>
            </div>


        )
    }
}

export default MainContainer