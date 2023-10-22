import React from "react";



import "./App.css";
import Header from "./components/Header/Header";

// const navigationData = [
//   {
//     name: "Home",
//     subLink: [],
//     href: "/"
//   },
//   {
//     name: "About",
//     subLink: [
//       {
//         name: "Services",
//         subLink: [
//           { name: "Service A", subLink: [], href: "/" },
//           { name: "Service B", subLink: [], href: "/" }
//         ]
//       },
//       { name: "Info", subLink: [] }
//     ],
//     href: "/"
//   },
//   {
//     name: "Contact",
//     subLink: [
//       { name: "Call", subLink: [], href: "/" },
//       { name: "Mail", subLink: [], href: "/" }
//     ],
//     href: "/"
//   }
// ];
// const profileMockData = {
//   name: "Profile",
//   subLink: [{ name: "LogOut", subLink: [], href: "/" }, { name: "View Profile", subLink: [], href: "/" }]
// };

const App = () => {
 

  return (
    <div style={{'width':'100%','height':'100%'}}>
    <Header />
    </div>
  );
};

export default App;
