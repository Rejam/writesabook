import React from 'react'
import './home.css'

class Main extends React.Component {
  render() {
    return (
      <div className="homeContainer">
        <p><i>Newcastle Writes a Book</i> is an idea I've had for a while and after much procrastination I've decided to go for it!</p>

        <p>The idea is to create a book made by the people of Newcastle. Anyone can purchase a page for £30.You can put absolutely anything you like on your page. A poem, photos, an advert, a piece of writing. You can place whatever you like - of course all submissions will be reviewed before being approved.</p>

        <p>If you don't want to purchase a whole page, then for a smaller donation of £10 you will have your name (or a name of your choice) printed in the back of the book.</p>

        <p>Finally, I will be donating pages to local charities so if you are interested you can also suggest a charity with your donation</p>

        <p>Please share this with anyone you think would be interested!</p>

        <p>If you have any questions please feel free to ask me through this site, or via our <a href="https://www.gofundme.com/newcastle-writes-a-book">Go Fund Me</a> page.</p>
      </div>
    )
  }
}

export default Main
