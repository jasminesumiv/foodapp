import "../Styles/main.css";

function Navbar() {
	return (
		<header>
			<nav className="navbar">
				<h1 className="logo">FOOD</h1>
				<ul className="nav-links">
					<li className="active"><a href="/#">Home</a></li>
					<li><a href="/#">Recipes</a></li>
					<li><a href="/#">Pages</a></li>
					<li><a href="/#">Blog</a></li>
					<li className="ctn" ><a href="/#">Shortcodes</a></li>
				</ul>
			</nav>
			<div className="header-content">
				<h2>It is even better than an expensive cookery show</h2>
				<div className="line"></div>
				<h1>Learn how to make your favorite restaurant's dishes</h1>
				<a href="/#" className="ctn">Explore</a>
			</div>
		</header>
	);
}

export default Navbar;