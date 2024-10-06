// import React from 'react';
import PropTypes from 'prop-types';

const RSVPForm = ({ onSubmit }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center mb-6">RSVP</h2>
                <form onSubmit={handleSubmit} className="flex justify-center">
                    <button
                        type="submit"
                        className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        RSVP
                    </button>
                </form>
            </div>
        </div>

    );
};

// Prop Types Validation
RSVPForm.propTypes = {
    onSubmit: PropTypes.func.isRequired, // Ensure onSubmit is a required function
};

export default RSVPForm;

