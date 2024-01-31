import './home.css';

function MyHome(){
    return (
        <div className="container">
    <div className="title">Registration Form</div>
    <div className="content">
        <div className="user-details">
          <div className="input-box">
            <span className="details">Full Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>
          <div className="input-box">
            <span className="details">Username</span>
            <input type="text" placeholder="Enter your username" required/>
          </div>
          <div className="input-box">
            <span className="details">Email</span>
            <input type="text" placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <span className="details">Password</span>
            <input type="text" placeholder="Enter your password" required/>
          </div>
          <div className="input-box">
            <span className="details">Confirm Password</span>
            <input type="text" placeholder="Confirm your password" required/>
          </div>
          <div className="input-box">
            <span className="details">Date of birth</span>
            <input type="date" name="dob" required/>
          </div>
        </div>
        <div className="button-container">
          <div className="button">
            <input type="submit" value="Register"/>
          </div>
        </div>
    </div>
  </div>
    );
}

export default MyHome;