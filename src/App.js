import { ThemeProvider } from "styled-components";
import React from "react"
import GlobalStyle from "./components/styles/Global";
import Header from "./components/Header";
import Home from "./components/Home";
import {Switch , Route} from "react-router-dom"
import Movies, { MyList, Popular, TrendingMovies } from "./components/Movies";
import ScrollToTop from "./components/ScroolToTop";
import SearchMovie from "./components/SearchMovie";
import MovieView from "./components/MovieView";


function App() {
  const theme = {
    colors:{
      standard : 'rgba(255,255,255,.05)',
      medium : '#fff',
    },
    bgColor : '#000'

  }
  return (
   <>

      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path="/movies" component={Movies} />
          <Route exact path="/trending" component={TrendingMovies} />
          <Route exact path="/newpopular" component={Popular} />
          <Route exact path="/mylist" component={MyList} />
          <Route exact path="/searchMovie" component={SearchMovie} />
          <Route exact path="/movieview" component={MovieView} />
        </Switch>
      

      </ThemeProvider>
   </>
  );
}

export default App;
