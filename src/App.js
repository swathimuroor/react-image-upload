import  { useState } from 'react';
import profilePic from './avatar.jpg';
import './App.css';

const App = () => {
  const [profileImg, setProfileImg] = useState(profilePic);

  const imageHandler = (e) =>{
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setProfileImg(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  }

  return (
    <div className="page">
      <div className="container">
        <h1 className="heading">Your Favourite Image</h1>
        
        <div className="img-holder">
          <img src={profileImg} alt="profilePic" className="img" id="img"/>
        </div>
        <input type="file" name="image-upload" id="input" accept="image/*" onChange={imageHandler} />
        <div className="label">
          <label htmlFor="input" className="image-upload">
            <i  className="material-icons" > upload</i> Upload Here
          </label>
        </div>
      </div>
      
    </div>
  )
}

export default App
