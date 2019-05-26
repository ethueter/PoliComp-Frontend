import React from 'react';
import NavBar from '../components/NavBar'
import StoryContainer from './StoryContainer';
import { Header, Grid, Divider, Segment} from 'semantic-ui-react';
import _ from 'lodash'
// import FullStory from '../components/FullStory';
const key = '9663743b34524026854a945d187b6f6e'
const domains = 'foxnews.com,huffpost.com,cnn.com,nytimes.com,washingtontimes.com,apnews.com,npr.com,aljazeera.com,brietbart.com,nationalreview.com,drudgereport.com,reuters.com'


class MainContainer extends React.Component {

    constructor() {
        super()
        this.state = {
            headlines: [],
            readStory: []

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

   displayStory = () => {
       return this.state.headlines.filter(article => article.read)
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
        
    }
    
    render() {
       
        return(
            <div>
                <div>
                    <Header size='huge'>Political Compass</Header>
                    <Header as='h3'>Read It.  Rate It.  Find Your Way.</Header>
                </div>
                <div>
                    <NavBar />          
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