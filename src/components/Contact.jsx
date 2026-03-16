import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                        Get In Touch
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        If you have any questions, project ideas, or collaboration
                        opportunities, feel free to reach out. I would be happy to
                        discuss how we can work together.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-6">
                            Send Me a Message
                        </h3>

                        <form className="space-y-6">

                            <div>
                                <label className="text-gray-600 text-sm font-medium">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 text-sm font-medium">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 text-sm font-medium">
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    placeholder="Write your message here..."
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition font-medium"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8">

                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-indigo-600 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Phone Number
                                </h4>
                                <p className="text-gray-500">
                                    +880 1814 160807
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-indigo-600 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Email Address
                                </h4>
                                <p className="text-gray-500">
                                    yousufislam7900@gmail.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-800">
                                    Location
                                </h4>
                                <p className="text-gray-500">
                                    Mirpur-1, Dhaka, Bangladesh
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="text-gray-500">
                                I usually respond within 24 hours. Looking forward
                                to hearing from you!
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;