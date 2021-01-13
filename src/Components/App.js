import React, { Component } from 'react';
import Navbar from './Navbar';
import {data} from '../data';
import MovieCard from './MovieCard';
import {addMovies,setShowFavourite} from '../actions';



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
      this.onChangeTab=(value)=>{
      this.props.store.dispatch(setShowFavourite(value));
    }
  }
  render() {
    const store=this.props.store;
    const {list,favourites,showFavourites}=store.getState();
    const renderedList=showFavourites ? favourites:list;
    console.log('RENDERED',this.props.store.getState());
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ? 'active-tabs':''}`} onClick={this.onChangeTab}>Favourites</div>
          </div>

          <div className="list">
            {renderedList.map((movie,index)=>(
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
