import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.user);

  const handleLogout = () => {
    navigate("/");
    dispatch(clearCart());
    dispatch(logoutUser());
  };
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-element flex justify-center sm:justify-end">
        {/* User info */}
        {user ? (
          <div className="flex gap-x-2 sm:gap-x-8 items center">
            <p className="text-xs sm:text-sm">Hi, {user.username}</p>
            <button
              className="btn btn-xs btn-outline btn-primary"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-x-6 justify-center items-center">
            <Link className="link link-hover text-xs sm:text-sm" to="/login">
              Sign in / Guest
            </Link>{" "}
            <Link className="link link-hover text-xs sm:text-sm" to="/register">
              Create an Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
