import React, { Component } from 'react';
import Navbar from './Navbar';
import {data} from '../data';
import MovieCard from './MovieCard';
import {addMovies} from '../actions';



class App extends Component {
  componentDidMount(){
    //make api call
    //dispatch action
      const {store}=this.props;
      store.subscribe(()=>{
        console.log("Updated");
        this.forceUpdate();
      });
      store.dispatch(addMovies(data));
    
    
    
    console.log(this.props.store.getState());
    
  }
  render() {
    const store=this.props.store;
    const {list}=store.getState();
    console.log("Rendered");
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie,index)=>(
                <MovieCard movie={movie} key={`movies-${index}`}/>
            ))}
          </div>
        </div>
    </div>
    );
  }
}



export default App;
