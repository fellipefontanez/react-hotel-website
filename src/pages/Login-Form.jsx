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
                    <input type="button" value="Sign In" />
                </div>
                <div className="socialMediaButtons">
                    <input type="button" value="google" />
                    <input type="button" value="facebook" />
            </div>
            </div>
        </div>
    )
}