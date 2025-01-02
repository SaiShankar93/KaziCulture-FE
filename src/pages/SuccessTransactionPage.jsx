import React from "react";

const SuccessTransactionPage = () => {
  const tickStyle = {
    animation: 'tick 0.5s ease-in-out forwards',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <svg
          className="h-12 w-12 mb-4 text-green-600 animate-tick"
          viewBox="0 0 512 512"
          fill="currentColor"
        >
          <path fill="#3AAF3C" d="M256 0c141.39 0 256 114.61 256 256S397.39 512 256 512 0 397.39 0 256 114.61 0 256 0z" />
          <path
            fill="#0DA10D"
            fillRule="nonzero"
            d="M391.27 143.23h19.23c-81.87 90.92-145.34 165.89-202.18 275.52-29.59-63.26-55.96-106.93-114.96-147.42l22.03-4.98c44.09 36.07 67.31 76.16 92.93 130.95 52.31-100.9 110.24-172.44 182.95-254.07z"
            style={tickStyle} // Apply animation here
          />
          <path fill="#fff" fillRule="nonzero" d="M158.04 235.26c19.67 11.33 32.46 20.75 47.71 37.55 39.53-63.63 82.44-98.89 138.24-148.93l5.45-2.11h61.06c-81.87 90.93-145.34 165.9-202.18 275.53-29.59-63.26-55.96-106.93-114.96-147.43l64.68-14.61z" />
        </svg>
        <h1 className="text-2xl font-bold text-green-600">
          Transaction Successful!
        </h1>
        <p className="mt-4 text-gray-600 text-center">
          Your payment has been processed successfully.
        </p>
      </div>
    </div>
  );
};

export default SuccessTransactionPage;