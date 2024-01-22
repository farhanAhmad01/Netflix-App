async function getData(page,name){
    let API_URL;
    if(page){
        API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1995706620a80431488272f6e5dd4fab&page=${page}`;
    }else{
        API_URL = `https://api.themoviedb.org/3/search/movie?api_key=1995706620a80431488272f6e5dd4fab&query="${name}`
    }

    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    const response = await fetch(API_URL)
    const {results} = await response.json()
    const All_Movies = []
    results.forEach((movie) => {
        const {poster_path,backdrop_path,title,overview,vote_average} = movie;
        All_Movies.push({
            poster_path : IMG_PATH + poster_path,
            backdrop_path : IMG_PATH + backdrop_path,
            title,
            vote_average,
            overview,
        })
    })
    return All_Movies

}

export default getData;