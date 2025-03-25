import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

    return (
        <>
            <div>SignUpPage</div>
            <Link to="/">Go to Home Page</Link>
            <button onClick={() => navigate("/")}>Go to Home</button>
        </>
    );
};

export default SignUpPage;