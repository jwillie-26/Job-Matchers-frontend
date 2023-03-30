import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Loading from './components/Loading';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/user/Signup';
import Login from './components/user/Login';
import Logout from './components/user/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';
import Ehome from './components/employers/Ehome';
import  Home from "./components/Home";
import Blog from "./components/Blog";
import Contact from './components/Contact';
import Eform from './components/employers/Eform';
import Jobs from './components/Jobs';
import FileUploader from './components/FileUploader';
import EsignUp from './components/employers/EsignUp';
import Elogin from './components/employers/Elogin';




function App() {
  const [user, setUser] = useState(null);
  const [jobs, setJobs]= useState([])
  


  useEffect(() => {
    fetch("https://careerconnect-production.up.railway.app/job_listings")
    .then((res)=>res.json())
    .then((jobs)=> setJobs(jobs))
  }, [])

  useEffect(() => {
    //auto-login
    fetch("https://careerconnect-production.up.railway.app/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

// if (!user) return <SignUp onLogin={setUser} />;

  return (
    <div className="App">
        <Navbar setUser={setUser}/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/loading' element={<Loading/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/eform' element={<Eform jobs={jobs} setJobs={setJobs}/>}/>
      <Route path='/jobs' element={<Jobs jobs={jobs}/>}/>
      <Route path='/upload' element={<FileUploader  />}/>
      <Route path='/ehome' element={<Ehome/>}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/Login" element={<Login onLogin={setUser}/>}/>
      <Route path="/logout" element={<Logout setUser ={setUser} />} />
     <Route path='/contact' element={<Contact/>}/>
      <Route path='/upload' element={<FileUploader />}/>
      <Route path='/esignup' element={<EsignUp />}/>
      <Route path='/elogin' element={<Elogin />}/>

      </Routes>
</div>
  );
}

export default App;
