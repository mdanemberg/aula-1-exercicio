import TweetList from './components/TweetList'
import TweetForm from './components/TweetForm'

const tweetsContainer = 'tweets-container'
const list = new TweetList({tweetsContainer})

const form = 'form-container'
const tweetForm = new TweetForm({
  form,
  tweetsContainer
})
tweetForm.render()
tweetForm.binds()

list.render()
