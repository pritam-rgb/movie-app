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
    
    
    
    // console.log(this.props.store.getState());
    this.isMovieFavourite=(movie)=>{
      const {favourites}=this.props.store.getState();
      const index=favourites.indexOf(movie);
      if(index!==-1){
          return true;
      }
      return false;
    }
  }
  render() {
    const store=this.props.store;
    const {list}=store.getState();
    console.log('RENDERED',this.props.store.getState());
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
                <MovieCard 
                movie={movie} 
                dispatch={this.props.store.dispatch} 
                key={`movies-${index}`} 
                isFavourite={this.isMovieFavourite(movie)}
                />
            ))}
          </div>
        </div>
    </div>
    );
  }
}



export default App;
