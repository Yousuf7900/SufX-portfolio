
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-extrabold text-gray-500">
                    404
                </h1>
                
                <h2 className="text-3xl font-bold text-gray-800 mt-4 md:text-4xl">
                    Oops! Page not found.
                </h2>
                <p className="text-gray-500 mt-4 mb-8 text-lg">
                    The page you are looking for might not developed yet.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button 
                        onClick={() => navigate(-1)}
                        className="px-6 py-3 bg-white text-gray-700 font-semibold border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200 w-full sm:w-auto"
                    >
                        &larr; Go Back
                    </button>
                    <button 
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
                    >
                        Go to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;