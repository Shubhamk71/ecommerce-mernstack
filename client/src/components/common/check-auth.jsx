import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  console.log("Path:", location.pathname);
  console.log("Authenticated:", isAuthenticated);
  console.log("User:", user);

  // Redirect from root
  if (location.pathname === "/") {
    if (!isAuthenticated) return <Navigate to="/auth/login" />;
    return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/shop/home"} />;
  }

  // Redirect to login if unauthenticated and trying to access protected routes
  if (
    !isAuthenticated &&
    !["/auth/login", "/auth/register"].some((path) => location.pathname.includes(path))
  ) {
    return <Navigate to="/auth/login" />;
  }

  // Redirect authenticated users away from login/register
  if (
    isAuthenticated &&
    ["/auth/login", "/auth/register"].some((path) => location.pathname.includes(path))
  ) {
    return <Navigate to={user?.role === "admin" ? "/admin/dashboard" : "/shop/home"} />;
  }

  // Prevent users from accessing admin pages without admin role
  if (isAuthenticated && user?.role !== "admin" && location.pathname.includes("/admin")) {
    return <Navigate to="/unauth-page" />;
  }

  // Prevent admin from accessing shop pages
  if (isAuthenticated && user?.role === "admin" && location.pathname.includes("/shop")) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
}

export default CheckAuth;




// import { Navigate, useLocation } from "react-router-dom";

// function CheckAuth({ isAuthenticated, user, children }) {
//   const location = useLocation();

//   console.log(location.pathname, isAuthenticated);

//   if (location.pathname === "/") {
//     if (!isAuthenticated) {
//       return <Navigate to="/auth/login" />;
//     } else {
//       if (user?.role === "admin") {
//         return <Navigate to="/admin/dashboard" />;
//       } else {
//         return <Navigate to="/shop/home" />;
//       }
//     }
//   }

//   if (
//     !isAuthenticated &&
//     !(
//       location.pathname.includes("/login") ||
//       location.pathname.includes("/register")
//     )
//   ) {
//     return <Navigate to="/auth/login" />;
//   }

//   if (
//     isAuthenticated &&
//     (location.pathname.includes("/login") ||
//       location.pathname.includes("/register"))
//   ) {
//     if (user?.role === "admin") {
//       return <Navigate to="/admin/dashboard" />;
//     } else {
//       return <Navigate to="/shop/home" />;
//     }
//   }

//   if (
//     isAuthenticated &&
//     user?.role !== "admin" &&
//     location.pathname.includes("admin")
//   ) {
//     return <Navigate to="/unauth-page" />;
//   }

//   if (
//     isAuthenticated &&
//     user?.role === "admin" &&
//     location.pathname.includes("shop")
//   ) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   return <>{children}</>;
// }

// export default CheckAuth;
