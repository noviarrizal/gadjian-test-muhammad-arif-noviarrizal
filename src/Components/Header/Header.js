import React from "react";
import "./Header.scss";

const Header = () => {
	return (
		<header className="main-header">
			<main className="header-img">
				<img
					src="https://www.gadjian.com/static/images/gadjian_logo_tosca.png"
					alt="gadjian logo"
				/>
			</main>
			<main className="header-data">
				<h1>
					Hallo, <span>Gadjian User</span>
				</h1>
				<img
					src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
					alt=""
				/>
			</main>
		</header>
	);
};

export default Header;
