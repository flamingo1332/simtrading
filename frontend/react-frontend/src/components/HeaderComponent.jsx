import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PropTypes from "prop-types";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            SimTrading
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Stock
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Posts
                </Link>
              </li>
            </ul>
            <Link to={"/"} className="nav-link">
              Profile
            </Link>
            <Link to={"/"} className="nav-link">
              Login
            </Link>
            <Link to={"/"} className="nav-link">
              Logout
            </Link>
            <Link to={"/"} className="nav-link">
              Signup
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

// const HeaderComponent = () => {
//   return (
//     <div>
//       <header>
//         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//           <div>
//             <Link to={"/"} className="navbar-brand">
//               SimTrading
//             </Link>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// class HeaderComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {};
//   }

//   componentWillMount() {}

//   componentDidMount() {}

//   componentWillReceiveProps(nextProps) {}

//   shouldComponentUpdate(nextProps, nextState) {}

//   componentWillUpdate(nextProps, nextState) {}

//   componentDidUpdate(prevProps, prevState) {}

//   componentWillUnmount() {}

//   render() {
//     return (
//       <div>
//         <header>
//           <nav className="navbar navbar-expand-md navbar-dark bg-dark">
//             <div>
//               <a href="https://javaguides.net" className="navbar-brand">
//                 SimTrading
//               </a>
//             </div>
//           </nav>
//         </header>
//       </div>
//     );
//   }
// }

HeaderComponent.propTypes = {};

export default HeaderComponent;
