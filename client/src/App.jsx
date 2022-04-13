import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import AddPostForm from './components/AddPostForm';
import Posts from './components/Posts';

function App() {
  return (
      <div className="wrapper">
         <div className='header'>
            Games Information
         </div>
         <div className='main-content'>
            <Posts />
            <AddPostForm />
         </div>
      </div>
  )
}

export default App;
