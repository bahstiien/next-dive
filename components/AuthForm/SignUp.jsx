// import React, { useRef, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

// const SignUp = () => {
//   const [error, setError] = useState("");
//   const history = useHistory();
//   const { signup } = useContext(AuthContext);
//   const showModal = useSelector((state) => state);

//   const dispatch = useDispatch();

//   const closeModal = () => {
//     dispatch({
//       type: "CLOSEMODAL",
//     });
//   };
//   const toggleSignIn = () => {
//     dispatch({
//       type: "TOGGLEIN",
//     });
//   };
//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (inputs.current[1].value !== inputs.current[2].value) {
//       setError("Les mots de passe ne sont pas identiques");
//       return;
//     }

//     await signup(inputs.current[0].value, inputs.current[1].value);
//     closeModal();
//     history.push("/loggedHome");
//   }

//   const inputs = useRef([]);

//   const addInputs = (el) => {
//     if (el && !inputs.current.includes(el)) {
//       inputs.current.push(el);
//     }
//   };

//   return (
//     <div className={showModal.showSignUp ? "global-modal" : "hide-modal"}>
//       <div onClick={closeModal} className="overlay"></div>

//       <div className="container-modal">
//         <form className="form-auth">
//           <h2>INSCRIPTION</h2>
//           <label htmlFor="mail">Votre mail</label>
//           <input type="email" htmlFor="mail" required />

//           <label htmlFor="psw">Votre mot de passe</label>
//           <input type="password" id="psw" required />

//           <label htmlFor="confirmpsw">Confirmez le mot de passe</label>
//           <input type="password" id="confirmpsw" required />

//           <button className="btn-sign">Inscrire</button>
//         </form>

//         <button onClick={closeModal} className="btn-close">
//           X
//         </button>
//         <p className="bottom-help-txt">Besoin de se connecter ?</p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
