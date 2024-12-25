import "../Styles/App.css"
import Books from "./Books"
import List from "./List"
import Button from "../Components/ComponentsList/ButtonList"
import useClose from "../Components/ComponentsList/HandleButtonClose"
import { useParams } from "react-router-dom"
import useStorage from "../Features/Books/LocalStorage"
import { MdElderlyWoman } from "react-icons/md"
//import { useNavigate, useParams } from "react-router-dom"
//import useStorage from "../Features/Books/LocalStorage"
//import { useEffect, useState } from "react"

interface propsUser {
	user: boolean
}

const Home = (newUser: propsUser) => {
	const { isVisible, handleIconClick } = useClose();
	const { clearStorage } = useStorage();

	const storedName = localStorage.getItem("newUser");
	console.log(storedName);
	console.log(storedName === "true")
	if (storedName === "true") {
		localStorage.clear();
	}

	return (
		<div className="container-general">
			<Books />
			{isVisible ? <List lclose={handleIconClick()} /> : <Button show={handleIconClick()} />}
		</div>
	)
}
export default Home;
