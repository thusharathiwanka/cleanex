import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ConfirmModal from "../modals/ConfirmModal";
import Error from "../toasts/Error";
import Success from "../toasts/Success";
import axios from "axios";
import img from "../../assets/images/UserprofileAvatar2.png";

const EditDelete = () => {
	const history = useHistory();
	const [userDetail, setUserDetail] = useState({});
	const [useId, setUserId] = useState("");
	const [Popup, setPopup] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const [buttonStatus, setButtonStatus] = useState(false);
	// const [isLoading, setIsLoading] = useState(true);
	const [updateUser, setUpdatUser] = useState({
		name: "",
		email: "",
		password: "",
		mobile: "",
		updatedAt: "",
	});

	const getUserprofileDetails = async () => {
		try {
			const res = await axios.get("/customers/userProfile");
			setUpdatUser(res.data.customer);
			// setIsLoading(false);
			// setUserDetail(res.data.customer);
		} catch (err) {
			console.error(err.message);
		}
	};

  const saveUpdatedUser = async (e) => {
    e.preventDefault();
    // console.log("frfrfr");
    setButtonStatus(true);
    try {
      updateUser.updatedAt = new Date();
      const res = await axios.put(`/customers/updateUserProfile`, updateUser);
      // console.log(res);
      setButtonStatus(false);
      setUpdatUser({
        name: "",
        email: "",
        password: "",
        mobile: "",
      });
      setSuccess("User updated successfully.");
      getUserprofileDetails();
      setTimeout(() => history.push("/auth/user/profile"), 2000);
    } catch (err) {
      setError(err.response);
      console.log(err.response);
      setButtonStatus(false);
    }
  };
  useEffect(() => {
    getUserprofileDetails();
  }, []);


	const deleteprofile = async (id) => {
		try {
			const res = await axios.delete("/customers/deleteProfile");
			console.log(id);
			if (res.status === 200) {
				setPopup(false);
				const logout = async () => {
					await axios.get("/users/logout");
					history.push("/");
				};
				logout();
			}
		} catch (err) {
			console.log(err);
		}
	};
	return (
		<div>
			{Popup && (
				<ConfirmModal
					setShowModal={setPopup}
					showModal={Popup}
					execute={deleteprofile}
					id={useId}
				/>
			)}{" "}
			<div className="w-full text-center flex justify-center">
				{error && <Error error={error} top="-top-2" />}
				{success && <Success success={success} top="-top-2" />}
			</div>
			<div className=" absolute mx-auto bg-white shadow-lg sm:rounded-2xl sm:p-20 top-2  ml-96 my-8 w-full max-w-xl  rounded-lg px-4 pt-2 items-center justify-end">
				<h1 className="text-5xl font-extrabold pb-10 text-center">
					Edit profile
				</h1>
				<div className="relative w-24 h-24 mb-8 object-center">
					<img
						className="rounded-full border border-gray-100 shadow-sm object-center "
						src={img}
						alt="user image"
					/>
				</div>
				<form
					className="w-2/4 text-gray-800 font-semibold relative"
					onSubmit={saveUpdatedUser}
					encType="multipart/form-data"
				>
					<div className=" mb-4 ">
						<label className=" font-semibold text-24px" for="username">
							User Name
							<input
								className=" outline-none rounded-full border px-4 py-3 focus:border-light-blue"
								id="username"
								type="text"
								value={updateUser.name}
								onChange={(e) =>
									setUpdatUser({ ...updateUser, name: e.target.value })
								}
							/>
						</label>
					</div>

					<div className="mb-4">
						<label className=" font-semibold text-24px" for="email">
							Email
							<input
								className=" outline-none rounded-full border px-4 py-3 focus:border-light-blue"
								id="email"
								type="text"
								value={updateUser.email}
								onChange={(e) =>
									setUpdatUser({ ...updateUser, email: e.target.value })
								}
							/>
						</label>
					</div>

					{/* <div className="mb-4">
            <label className=" font-semibold text-24px" for="password">
              Password
              <input
                className="outline-none rounded-full border px-4 py-3 focus:border-light-blue"
                id="password"
                type="password"
                value={updateUser.password}
                onChange={(e) =>
                  setUpdatUser({ ...updateUser, password: e.target.value })
                }
              />
            </label>
          </div> */}

					<div className="mb-8">
						<label className=" font-semibold text-24px" for="mobile">
							Mobile
							<input
								className="outline-none rounded-full border px-4 py-3 focus:border-light-blue"
								id="mobile"
								type="text"
								value={updateUser.mobile}
								onChange={(e) =>
									setUpdatUser({ ...updateUser, mobile: e.target.value })
								}
							/>
						</label>
					</div>
					<div className="space-x-4 mb-4">
						<button
							className="transition justify-end duration-500 ease-in-out  py-2 px-4 bg-light-blue hover:bg-black text-white sm:rounded-3xl transform hover:-translate-y-1 hover:scale-110 "
							to={`/auth/user/userprofileeditdelete`}
						>
							{buttonStatus ? "Saving" : "Edit"}
						</button>
					</div>
				</form>
				<button
					className="text-red-500 hover:text-red-400"
					onClick={() => {
						setPopup(true);
						setUserId(userDetail._id);
					}}
				>
					Delete Profile permanently
				</button>
			</div>
		</div>
	);
};

export default EditDelete;
