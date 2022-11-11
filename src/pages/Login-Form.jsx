import '../../public/style/login-form.css'

export default function LoginForm() {
    return (
        <div className="formContainer">
            <div className='loginContainer'>
                <div className="inputFields">
                    <p className="formHeader firstHeader">Create your account.</p>
                    <p className='formHeader'> It's free, we promisse.</p>
                    <div className="lineHeader"></div>
                        <input type="text" name="user" id="user" placeholder='Username' />
                        <input type="password" name="password" id="password" placeholder='Password' />
                        <input type="password" name="confirmpass" id="confirmpass" placeholder='Confirm Password' />
                        <input type="email" name="email" id="email" placeholder='Email'/>
                        <div className="confirmation">
                            <input type="checkbox" name="confirm" id="confirm" />
                            <p>I agree to the terms of use and the privacy policy.</p>
                        </div>
                        <div className="lineBottom"></div>
                        <input type="submit" value="Sign in" className='signin'/>
                </div>
                <div className="socialMediaContainer">
                    <div className="socialTextContainer">
                        <p className='socialText'>Login through social media</p>
                    </div>
                    <div className="socialMediaButtons">
                        <div className="google">
                            <div className="containerBtns">
                                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png" alt="google icon" />
                            </div>
                        </div>
                        <div className="facebook">
                            <div className="containerBtns">
                                <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-512.png" alt="facebook-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}