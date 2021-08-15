import React from "react";
import { Link } from "react-router-dom";
import { TiLocation } from "react-icons/ti";
import { SiFacebook, SiInstagram, SiYoutube, SiTwitter } from "react-icons/si";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

import LogoWhite from "../../assets/images/logo-white.png";

const Footer = () => {
	return (
		<footer className="bg-light-blue text-white pt-10">
			<div className="flex mx-auto max-w-screen-2xl justify-between items-center px-10 min-h-12">
				<div>
					<img src={LogoWhite} alt="footer-logo" />
					<div>
						<p className="max-w-md pt-5">
							We are professionals in the laundry and dry cleaning business,
							which means we always stay up to date on the latest technologies
							and cleaning methods.
						</p>
					</div>
					<div className="flex text-xl justify-between w-40 py-5">
						<SiFacebook />
						<SiYoutube />
						<SiInstagram />
						<SiTwitter />
					</div>
					<p className="pb-5">CLEANEX 2021 - All rights reserved &copy;</p>
				</div>
				<div>
					<div className="flex justify-end items-start pt-5">
						<div className="text-2xl pr-5 pt-1">
							<TiLocation />
						</div>
						<p>
							99 Street, Ward Place, <br /> Colombo.
						</p>
					</div>
					<div className="flex justify-end items-center pt-5">
						<div className="text-2xl pr-5">
							<IoMail />
						</div>
						<p>info@cleanex.com</p>
					</div>
					<div className="flex justify-end items-center pt-5">
						<div className="text-2xl pr-5">
							<IoIosCall />
						</div>
						<p>+94 11 222 2222</p>
					</div>
					<div className="flex w-80 justify-between pt-5 pb-5">
						<Link to="#">Home</Link>
						<Link to="#">Services</Link>
						<Link to="#">About</Link>
						<Link to="#">Contact</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
