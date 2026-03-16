import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-gray-50 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
                        Have Any Questions?
                    </h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
                        condimentum turpis nisl sem, viverra habitasse urna ante lobortis
                        fermentum accumsan.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-16">

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl shadow-md">
                        <form className="space-y-6">

                            <div>
                                <label className="text-gray-600 text-sm">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 text-sm">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 text-sm">Message</label>
                                <textarea
                                    rows="5"
                                    placeholder="Write your message..."
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
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
                                <h4 className="font-semibold text-gray-800">My Phone</h4>
                                <p className="text-gray-500">(+881) 111 222 333</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-indigo-600 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-800">My Email</h4>
                                <p className="text-gray-500">name@mydomain.com</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-indigo-600 text-xl mt-1" />
                            <div>
                                <h4 className="font-semibold text-gray-800">My Address</h4>
                                <p className="text-gray-500">
                                    123 New York D Block 1100, 2011 USA
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;