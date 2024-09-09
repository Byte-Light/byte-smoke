import React from 'react';

const ReviewsSection: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Section: Trustpilot Rating */}
        <div className="lg:w-1/4 w-full mb-8 lg:mb-0 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-2">Excellent</h2>
          <div className="flex justify-center lg:justify-start mb-2">
            {/* 5-star rating icons */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27l5.18 3.73-1.64-5.34L20.36 12h-5.55L12 6.36 9.19 12H3.64l4.82 3.66-1.64 5.34L12 17.27z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-2">
            Based on <strong>26,056 reviews</strong>
          </p>
          <p className="text-green-600 text-sm font-semibold">Trustpilot</p>
        </div>

        {/* Right Section: User Reviews */}
        <div className="lg:w-3/4 w-full lg:pl-8">
          <div className="overflow-x-auto flex space-x-6 py-4">
            {/* Individual Review Cards */}
            {[
              {
                id: 1,
                username: 'Matt Randall',
                time: '11 hours ago',
                review: 'Everything came as advertised and promptly. Will use again.',
              },
              {
                id: 2,
                username: 'Kirt Jones',
                time: '19 hours ago',
                review: '1st time buying cigars, very impressed with the packaging and how quick.',
              },
              {
                id: 3,
                username: 'Richard Harvey',
                time: '22 hours ago',
                review: 'Great communication and speedy delivery.',
              },
              {
                id: 4,
                username: 'Paul Jarvis',
                time: '23 hours ago',
                review: 'My first purchase from this supplier and I enjoyed a very quick, efficient service.',
              },
            ].map((review) => (
              <div key={review.id} className="bg-white p-4 rounded-lg shadow-lg min-w-[300px]">
                <div className="flex items-center mb-2">
                  {/* 5-star rating icons */}
                  {[...Array(5)].map((_, index) => (
                    <svg key={index} className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27l5.18 3.73-1.64-5.34L20.36 12h-5.55L12 6.36 9.19 12H3.64l4.82 3.66-1.64 5.34L12 17.27z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">Verified</span>
                </div>
                <p className="text-gray-700 font-semibold mb-1">{review.review}</p>
                <p className="text-gray-500 text-sm">
                  <strong>{review.username}</strong>, {review.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
