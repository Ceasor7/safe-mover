import React from 'react';

function Estimate({ containerClass = "", inputContainerClass = "", inputClass = "" }) {
    return (
        <div className={`mt-8 flex flex-wrap gap-4 text-left ${containerClass}`}>
            <h1 className="my-8 md:mt-12 font-bold text-4xl">
                Get A Free Estimate
            </h1>
            <form className="w-full">
                <div className={`flex flex-wrap md:flex-nowrap gap-4 w-full mb-4 ${inputContainerClass}`}>
                    <div className="flex flex-col w-full">
                        <label htmlFor="name" className="text-black mb-2">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" className={`bg-white text-black rounded p-2 w-full border mb-4 ${inputClass}`} required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="email" className="text-black mb-2">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" className={`bg-white text-black rounded p-2 w-full border mb-4 ${inputClass}`} required />
                    </div>
                </div>
                <div className={`flex flex-wrap md:flex-nowrap gap-4 w-full mb-4 ${inputContainerClass}`}>
                    <div className="flex flex-col w-full">
                        <label htmlFor="movingFromLocation" className="text-black mb-2">Moving From Location</label>
                        <input type="text" id="movingFromLocation" name="movingFromLocation" placeholder="Location" className={`bg-white text-black rounded p-2 w-full border mb-4 ${inputClass}`} required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="movingToLocation" className="text-black mb-2">Moving To Location</label>
                        <input type="text" id="movingToLocation" name="movingToLocation" placeholder="Location" className={`bg-white text-black rounded p-2 w-full border mb-4 ${inputClass}`} required />
                    </div>
                </div>
                <div className={`flex flex-wrap md:flex-nowrap gap-4 w-full mb-4 ${inputContainerClass}`}>
                    <div className="flex flex-col w-full">
                        <label htmlFor="movingFromHouseSize" className="text-black mb-2">Moving From House Size</label>
                        <input type="text" id="movingFromHouseSize" name="movingFromHouseSize" placeholder="# Rooms" className={`bg-white text-black rounded p-2 w-full border mb-4 ${inputClass}`} required />
                    </div>
                    <div className="flex flex-col w-full">
                        <label htmlFor="movingToHouseSize" className="text-black mb-2">Moving To House Size</label>
                        <input type="text" id="movingToHouseSize" name="movingToHouseSize" placeholder="# Rooms" className={`bg-white text-black rounded p-2 w-full border mb-4 ${inputClass}`} required />
                    </div>
                </div>
                <div className={`flex flex-wrap md:flex-nowrap gap-4 w-full ${inputContainerClass}`}>
                    <div className="flex flex-col">
                        <label htmlFor="plannedDates" className="text-black mb-2">Planned Dates</label>
                        <input type="date" id="plannedDates" name="plannedDates" className={`bg-white text-black rounded p-2 w-full border mb-4 ${inputClass}`} required />
                    </div>
                </div>
                {/* Submit Button */}
                <button type="submit" className={`bg-[#FF6F00] hover:bg-transparent text-white hover:text-black hover:border border-[#FF6F00] font-bold py-2 px-4 rounded w-full mt-6 ${inputClass}`}>
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Estimate;