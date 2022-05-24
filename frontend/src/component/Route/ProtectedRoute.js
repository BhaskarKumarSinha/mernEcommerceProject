// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import { Redirect, Route } from "react-router-dom";

// const ProtectedRoute = ({ isAdmin, component: Component, ...rest }) => {
//   const { loading, isAuthenticated, user } = useSelector((state) => state.user);

//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Redirect to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Redirect to="/login" />;
//             }

//             return <Component {...props} />;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

// export default ProtectedRoute;
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children, adminRoute }) => {
  const { user } = useSelector((state) => state.user);
  const isAdmin = user.role === "admin" ? true : false;

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }

  if (adminRoute && !isAdmin) {
    return <Navigate to={"/"} />;
  }
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
