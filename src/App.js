import React, {useState, useEffect } from 'react';
import Pagination from './components/Paginate';
import Jobs from './components/Jobs';
import Header from './Header';
import './App.css';

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect (()=> {
    const fetchPosts = ()=>{
      setLoading(true)
      fetch('https://obscure-sands-69987.herokuapp.com/api/v1/do-n0t-disturb/jobs/')
      .then(res => res.json())
      .then(setJobs)
      setLoading(false)
    }
    fetchPosts()
  }, [])
  console.log(jobs);

  //Get current job post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = jobs.slice(indexOfFirstPost, indexOfLastPost); 

  //Change Page
  const paging = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <Header />                                                                    
      <Jobs jobs={currentPosts} loading={loading} />
      <Pagination 
        postsPerPage={postsPerPage} 
        totalPosts={jobs.length} 
        paging={paging} 
      />
    </div>
  );
}

export default App;
