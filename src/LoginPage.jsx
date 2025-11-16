// ////////////////////////////////////
// ////////LoginPage.jsx/////////////
// ////////////////////////////////////

// import React, { useState } from "react";
// //import "./LoginPage.css"; // Import the CSS file for styling

// const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     onLogin(username, password);
//   };

//   return (
//     <div className="login-page-wrapper">
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Sign In</h2>
//         <div className="input-wrapper">
//           <input
//             className="login-input"
//             type="text"
//             placeholder="Username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="input-wrapper">
//           <input
//             className="login-input"
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button className="login-button" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   </div>
//   );
// };

// export { LoginPage };



// import React, { useState } from "react";

// export const LoginPage = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(username, password);
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "linear-gradient(to bottom right, #14532d, #16a34a)", // green gradient
//       }}
//     >
//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           background: "white",
//           padding: "40px",
//           borderRadius: "10px",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
//           minWidth: "300px",
//         }}
//       >
//         <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           style={{
//             padding: "10px",
//             marginBottom: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={{
//             padding: "10px",
//             marginBottom: "10px",
//             borderRadius: "5px",
//             border: "1px solid #ccc",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             padding: "10px",
//             backgroundColor: "#16a34a",
//             color: "white",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };


import React, { useState } from "react";
import "./LoginPage.css";

export const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="login-page-wrapper">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">LOGIN</h2>

        {/* Stack gives one fixed width that everything shares */}
        <div className="login-stack">
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
