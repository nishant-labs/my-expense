import Header from './header';
import Body from './body';
import Footer from './footer';

function Layout() {
	return (
		<div className="flex-lg-row">
			<Header />
			<div className="flex-grow-1">
				<Body />
			</div>
			<Footer />
		</div>
	);
}

export default Layout;
