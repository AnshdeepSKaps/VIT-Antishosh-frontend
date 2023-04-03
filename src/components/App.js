import Menu from "./Menu";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import DummyComponent from "./DummyComponent";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import Blogs from "./Blogs"
import Landing from "./Landing";
import Profile from "./Profile";
import Carpool from "./Carpool";
import AddCarpool from "./AddCarpool";
import Document from "./Document";
import AddDocument from "./AddDocument";
import AddPost from "./AddPost"
import Forum from "./Forum"

const App = () => {
    // const navigate = useNavigate();
    const [cookies, setCookies] = useCookies();
    let menu;
    if (cookies.isLoggedIn) {
        menu = <Menu />;
    }
    else {
        menu = <></>;
    }

    return (
        <div className="container-fluid">
            <Router>
                {menu}
                <Routes>
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/signup" exact element={<Signup />} />
                    <Route path="/" exact element={<Landing />} />
                    <Route path="/forums" exact element={<Forum />} />
                    <Route path="/forums/addPost" exact element={<AddPost link="/forums" />} />
                    <Route path="/blogs" exact element={<Blogs />} />
                    {/* <Route path="/addPost" exactx element={<AddPost />} /> */}
                    <Route path="/blogs/addPost" exact element={<AddPost link="/blogs" />} />
                    <Route path="/carpools" exact element={<Carpool />} />
                    <Route path="/addCarpool" exact element={<AddCarpool />} />
                    <Route path="/documents" exact element={<Document />} />
                    <Route path="/addDocument" exact element={<AddDocument />} />
                    <Route path="/profile" exact element={<Profile />} />
                    <Route path="/logout" exact element={<Logout />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;