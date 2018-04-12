import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }
  
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets,
    });
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets],
    })
  }

  shouldComponentUpdate(nextProps) {
<<<<<<< HEAD
    return nextProps.newTweets.length > 0;
=======
    return nextProps.tweets.length > 0;
>>>>>>> 542511834059612fb03e3aa2ba1b8409576226e8
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
