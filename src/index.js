import TweetList from './components/TweetList'
import Tweet from './components/Tweet'

const tweetsContainer = 'tweets-container'
const list = new TweetList({tweetsContainer})

const form = document.getElementById('tweet-form')
form.onsubmit = (e) => {
  e.preventDefault()
  const name = document.getElementsByName('name')[0]
  const text = document.getElementsByName('tweet')[0]

  if (name.value && text.value) {
    const newTweet = new Tweet({
      name: name.value,
      text: text.value
    })

    name.value = ''
    text.value = ''

    list.container.insertBefore(newTweet.render(), list.container.firstChild)
  }
}

list.render()
