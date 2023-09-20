
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Spinner from '../Spinner/Spinner'

const MainComponent = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    return (
        <div>
            <Header />
            <div className="flex min-h-screen">
                <div className="bg-gray-300 w-1/4 sticky">
                    <Sidebar />
                </div>
                <div className=" w-3/4">
                    {
                        (isLoading) ?
                           <Spinner></Spinner>
                            : <Outlet></Outlet>
                    }

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainComponent;