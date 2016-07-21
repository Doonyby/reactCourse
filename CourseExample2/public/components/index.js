var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var Link = router.Link;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;


var emails = {
  inbox: {
    0: {
      id: 0,
      from: "billg@microsoft.com",
      to: "TeamWoz@Woz.org",
      title: "Possible work opportunity",
      content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
    },
    1: {
      id: 1,
      from: "zuck@facebook.com",
      to: "TeamWoz@Woz.org",
      title: "Do you know PHP?",
      content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
    }
  },
  spam: {
    0: {
      id: 0,
      from: "ChEaPFl1ghTZ@hotmail.com",
      to: "TeamWoz@Woz.org",
      title: "WaNt CHEEp FlitZ",
      content: "Theyre CheEp"
    },
    1: {
      id: 1,
      from: "NiKEAIRJordanZ@hotmail.com",
      to: "TeamWoz@Woz.org",
      title: "JorDanz For SAle",
      content: "Theyre REELY CheEp"
    }
  }
}

class navBar extends React.Component {

  render () {
    return(
      <div>
      <strong><Link to={'/'}>Home</Link></strong>
      <strong><Link to={'/inbox/'}>Inbox</Link></strong>
      <strong><Link to={'/spam/'}>Spam</Link></strong>
      <div>{this.props.children}</div>
      </div>
      )
  }
}

class home extends React.Component {
  render () {
    return (<h1> Welcome to the email server </h1>)
  }
}

class inbox extends React.Component {
  render () {
    var email = []

    for(var i in emails.inbox) {
      email[i] = emails.inbox[i].from
    }

    var from = email.map((content,index) => {
      return (
        <p key={content}><Link to={{ pathname: '/email/'+ content,
                                     query: {name: 'inbox', id: index}
                                     }}>{content}</Link></p>
      )
    })
    return(<div>{from}</div>)
  }
}

class spam extends React.Component {
  render () {
    var email = []

    for(var i in emails.spam) {
      email[i] = emails.spam[i].from
    }

    var from = email.map((content,index) => {
      return (
        <p key={content}><Link to={{ pathname: '/email/'+ content,
                                     query: {name: 'spam', id: index}
                                     }}>{content}</Link></p>
      )
    })
    return(<div>{from}</div>)
  }
}

class emailContent extends React.Component {
  render () {
    var type = this.props.location.query.name
    var id = this.props.location.query.id

    return (<div><strong>{type === 'inbox' ? emails.inbox[id].content: emails.spam[id].content}</strong></div>)
  }
}

class NotMatch extends React.Component {
  render () {
    return (<strong>Page Not Found</strong>)
  }
}

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={navBar}>
      <IndexRoute component={home}/>
      <Route path="inbox" component={inbox}></Route>
      <Route path="email/:emailId" component={emailContent}/>
      <Route path="spam" component={spam}></Route>
      <Route path="*" component={NotMatch}/>
    </Route>
  </Router>
  );

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('app'));
});