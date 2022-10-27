import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from "react-router-dom"; 

const Template = () => {

	return (
		<>
		<Header />
		<Outlet />
		<Footer />
		</>
	)

}

export default Template;