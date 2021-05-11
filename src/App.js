import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';
import ShopPage from './pages/shoppage/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument} from './firebase/firebase.utils';
import {connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
/**
 * 
 * A component is updated whenever there is a change in the component's state or props
 * React has five built-in methods that gets called, in this order, when a component is updated:
 *  getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate() 

    




 * 
 * 
 * 
 * 
 */

class App extends React.Component {

  /**
   * 
   * 
   *  constructor() {

    super();

    this.state = {
      currentUser: null
    }

  }

   * 
   * 
   */

 
  unsubscribeFromAuth = null;

 
  //The componentDidMount() method is called after the component is rendered.
  //This is where you run statements that requires that the component is already placed in the DOM.
  componentDidMount(){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({currentUser:user});
      //createUserProfileDocument(user);
      //console.log(user);
      alert("Into Component Did Mount of App.js********************************");
      console.log("Into Component Did Mount of App.js********************************");
      console.log("Unsubscribe from Auth is " + this.unsubscribeFromAuth);
      
      if(userAuth){ //userAuth will be False if UserAuth is failed...i.e. when user is not logged in..still as guest
        alert("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Into UserAUth if condition^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
        const userRef = await createUserProfileDocument(userAuth); // store user profile in db
        // userRef.onSnapshot(snapShot =>{ // set the current user props in set state
        //   this.setState({
        //     currentUser:{
        //       id:snapShot.id,
        //       ...snapShot.data()
        //     }
        //   },alert("Set State Done in if condition"))
        // })

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data()
          });
        })


      }else{
        alert("^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Into UserAUth ELSE condition^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^")
        //alert("***********BEFORE CURRENT USER SET STATE*******************");
        setCurrentUser(userAuth,alert("Set State Done in else condition")) // when the user logs out set the currentUser to Null

      }

            //*****AFter set state render method is called againb */
      //alert("***********AFTER CURRENT USER SET STATE*******************");
      console.log("User Auth is " + userAuth);
      console.log(this.state) // if the user has not signin then currentUser will be null

      alert("OUT of Component Did Mount of App.js********************************")
    });
  }


  

  // Not sure when this is called
  componentWillUnmount() {
    alert("**************User is into Component Will Unmount***************");
    this.unsubscribeFromAuth();

  }

  

  render(){
    alert("Into render method of APP.js>>>>>>>>>>>>")
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
        
      </div>
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null,mapDispatchToProps)(App);
