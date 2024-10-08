import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerHeader = () => {
  let navigate = useNavigate();

  const userLogout = () => {
    toast.success("logged out!!!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    sessionStorage.removeItem("active-customer");
    sessionStorage.removeItem("customer-jwtToken");

    navigate("/");
    window.location.reload(true);
  };

  return (
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">

<li className="nav-item">
        <Link
          to="/home"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-white">Home</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/customer/wallet"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-white">My Wallet</b>
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="user/ground/bookings"
          className="nav-link active"
          aria-current="page"
        >
          <b className="text-white">Booked Turfs</b>
        </Link>
      </li>

      <li class="nav-item">
        <Link
          to=""
          class="nav-link active"
          aria-current="page"
          onClick={userLogout}
        >
          <b className="text-white">Logout</b>
        </Link>
        <ToastContainer />
      </li>
    </ul>
  );
};

export default CustomerHeader;
