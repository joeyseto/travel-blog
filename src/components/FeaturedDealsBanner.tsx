export default function FeaturedDealsBanner() {
  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row gap-6">
          
          {/* Left block - "Best Deal" - Takes up 2/3 of width */}
          <div className="w-2/3 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="flex flex-row items-center h-full p-6 lg:p-12">
              <div className="flex-1">
                <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                  Best Deal
                </h2>
                <p className="text-lg lg:text-xl text-gray-800 dark:text-white mt-2">
                  Save up to <span className="font-bold">50%</span>
                </p>
              </div>
              <div className="flex-shrink-0">
                <img
                  src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png"
                  alt="Best Deal"
                  className="h-32 lg:h-48 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right block - "Game Console" - Takes up 1/3 of width */}
          <div className="w-1/3 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-full p-6 flex flex-col justify-between min-h-[200px]">
              <div>
                <h2 className="text-2xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
                  Game Console
                </h2>
                <p className="text-lg lg:text-xl text-gray-800 dark:text-white mt-2">
                  Save up to <span className="font-bold">30%</span>
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <img
                  src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png"
                  alt="Game Console"
                  className="h-24 lg:h-32 w-auto object-contain"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}