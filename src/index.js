import TweetList from './components/TweetList'
import Tweet from './components/Tweet'

const tweetsContainer = 'tweets-container'
const list = new TweetList({tweetsContainer})

const form = document.getElementById('tweet-form')
form.onsubmit = (e) => {
  e.preventDefault()
  const name = document.getElementsByName('name')[0].value
  const text = document.getElementsByName('tweet')[0].value

  const newTweet = new Tweet({
    name,
    text
  })

  list.container.insertBefore(newTweet.render(), list.container.firstChild)
}

list.render()
