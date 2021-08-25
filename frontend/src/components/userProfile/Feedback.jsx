// import axios from "axios";
// import React, { useState } from "react";
// import Error from "../toasts/Error";
// import Success from "../toasts/Success";
// import { Link } from "react-router-dom";
// const Feedback = () => {
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [button, setButton] = useState(false);
//   const [newFeedback, setFeedback] = useState({
//     topic,
//     description,
//     email,
//     category,
//   });
//   const saveFeedback = async (e) => {
//     e.preventDefault();
//     setButton(true);
//     try {
//       const res = await axios.post("/", newFeedback);
//       newFeedback = res.data.feedback;
//       setButton(false);
//       setFeedback({
//         topic: "",
//         description: "",
//         email: "",
//         category: "",
//       });
//       setSuccess("Feedback is send Successfully.");
//     } catch (err) {
//       console.error(err.response.message);
//       setError(err.response.message);
//       setButtonStatus(false);
//     }
//   };

//   return (
//     <div>
//       <div className="flex mx-auto items-center justify-center shadow-lg mt-56  mb-4 max-w-lg">
//         {error && <Error error={error} top="-top-2" />}
//         {success && <Success success={success} top="-top-2" />}
//         <form className="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
//           <div className="flex flex-wrap -mx-3 mb-6">
//             <h2 className="text-5xl font-extrabold pb-10 pt-10 text-center ml-8">
//               Feedback
//             </h2>
//             <div className="w-full md:w-full px-3 mb-2 mt-2">
//               <textarea
//                 className="bg-gray-100 rounded border-2 border-light-blue leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
//                 name="body"
//                 placeholder="Type Your Feedback"
//                 required
//               ></textarea>
//               <email
//                 class="bg-gray-100 rounded border-2 border-light-blue leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
//                 name="body"
//                 placeholder="Type Your Feedback"
//                 required
//               ></email>
//               <select
//                 className="border rounded-full px-4 py-4 focus:outline-none"
//                 required
//                 value={newPackage.status}
//                 onChange={(e) =>
//                   setNewPackage({ ...newPackage, status: e.target.value })
//                 }
//               >
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//               </select>
//             </div>
//             <div className="w-full md:w-full flex items-start px-3">
//               <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto"></div>
//               <div className="-mr-1 space-x-4">
//                 <Link className="transition duration-500 ease-in-out py-3 px-5 bg-black hover:bg-light-blue text-white rounded-3xl transform hover:-translate-y-1 hover:scale-110">
//                   Cancle
//                 </Link>
//                 <Link
//                   className="transition duration-500 ease-in-out py-3 px-5 bg-light-blue hover:bg-black text-white rounded-3xl transform hover:-translate-y-1 hover:scale-110"
//                   to={`/auth/user/profile`}
//                 >
//                   Send
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Feedback;
