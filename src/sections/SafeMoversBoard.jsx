const SafeMoversBoard = () => {
  return (
    <div className="relative mx-5 sm:mx-24 flex items-end">
      <img
        className="w-full h-full object-cover"
        src="/auto-image-carousel1.jpg"
        alt="Background"
      />

      <div className="absolute inset-x-0 bottom-0 bg-[#00008B]/80 py-4">
        <p className="text-center text-white font-bold">SafeMover's Staff</p>
      </div>
    </div>
  );
};

export default SafeMoversBoard;
