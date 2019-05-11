import Tweet from './Tweet'

export default class TweetForm {
  constructor (props) {
    this.formContainer = document.getElementById(props.form)
    this.container = document.getElementById(props.tweetsContainer)
  }

  add () {
    const tweet = new Tweet({
      text: this.text,
      name: this.name
    })

    document.forms['create-tweet']['tweet'].value = ''
    document.forms['create-tweet']['name'].value = ''
    this.container.insertBefore(tweet.render(), this.container.firstChild)
  }

  onSubmit (e) {
    e.preventDefault()
    this.name = document.forms['create-tweet']['name'].value
    this.text = document.forms['create-tweet']['tweet'].value

    if (this.text && this.name) {
      this.add()
    }
  }

  binds () {
    this.form.onsubmit = this.onSubmit.bind(this)
  }

  render () {
    const form = `<div class="container">
      <div class="columns is-multiline is-centered">
        <form name="create-tweet" id="tweet-form">
          <div class="field">
            <div class="control">
              <input type="text" class="input" name="name" placeholder="Escreva o seu nome">
            </div>
          </div>
          <div class="field">
            <div class="control">
              <textarea class="textarea" name="tweet" placeholder="Escreva o seu tweet" cols="40" rows="5"></textarea>
            </div>
          </div>
          <div class="field is-pulled-right">
            <div class="control">
              <button type="submit" class="button is-dark">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>`

    this.formContainer.innerHTML = form
    this.form = document.getElementById('tweet-form')
  }
}
