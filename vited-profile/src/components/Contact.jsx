import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const [errorVisible, setErrorVisible] = useState(false);

    const toggleError = () => {
        setErrorVisible(!errorVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    <div className='contact m-10 sm:m-0 sm:mt-15 p-0 text-white min-h-screen'>
        <div className='mx-auto max-w-lg px-6 py-12 border rounded-2xl'>
            <h1 className='text-2xl text-center'>
                <span>
                    Touch base with me here!
                </span>
            </h1>
            <form
                action=""
                method="POST"
                id="form"
                noValidate
            >
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="text"
                        name="name"
                        placeholder=""
                        required
                        className="pt-3 pb-2 blowck w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="name"
                        className=""
                    >Name
                    </label>
                    <span className="text-red-500 hidden">
                        You must enter a name
                    </span>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="email"
                        name="email"
                        placeholder=""
                        required
                        className="pt-3 pb-2 blowck w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="email"
                        className="absolute duration-200 top-3 -z-1 origin-0 text-gray-450"
                    >Email
                    </label>
                    <span className="text-red-500 hidden">
                        You must enter a valid email
                    </span>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <textarea
                        name="message"
                        placeholder=""
                        required
                        rows={4}
                        className="pt-3 pb-2 blowck w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                    <label
                        htmlFor="message"
                        className="absolute duration-200 top-3 -z-1 origin-0 text-gray-450"
                    >Message
                    </label>
                    <span className="text-red-500 hidden">
                        You must enter a message
                    </span>
                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Submit
                </button>
            </form>
        </div>
    </div>
};

export default Contact;