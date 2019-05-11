import Tweet from './Tweet'
import { fetchTweets } from '../services'

class TweetList {
  constructor (props) {
    this.container = document.getElementById(props.tweetsContainer)
  }

  render () {
    try {
      // API
      this.tweets = fetchTweets()
      const html = this.tweets.map(t => {
        const tweet = new Tweet(t)
        return tweet.render()
      })
      html.forEach(el => this.container.appendChild(el))
    } catch (e) {
      console.log(e)
    }
  }
}

export default TweetList
