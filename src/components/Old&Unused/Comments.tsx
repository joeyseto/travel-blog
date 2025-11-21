export default function Comments() {
  return (
    <section className="w-full rounded-lg border-2 border-purple-600 p-4 my-8 mx-auto max-w-xl">
      <h3 className="font-os text-lg font-bold">Comments</h3>

      {/* Sample Comment */}
      <div className="flex mt-4">
        <div className="w-14 h-14 rounded-full bg-purple-400/50 flex-shrink-0 flex items-center justify-center">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://randomuser.me/api/portraits/men/43.jpg"
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="font-medium text-purple-800">John Doe</div>
          <div className="text-gray-600">Posted on 2023-10-02 14:30</div>
          <div className="mt-2 text-purple-800">
            This is a sample comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>

      {/* Comment Form */}
      <form className="mt-4">
        <div className="mb-4">
          <label htmlFor="name" className="block text-purple-800 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="border-2 border-purple-600 p-2 w-full rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-purple-800 font-medium">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            className="border-2 border-purple-600 p-2 w-full rounded"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-purple-700 text-white font-medium py-2 px-4 rounded hover:bg-purple-600"
        >
          Post Comment
        </button>
      </form>
    </section>
  );
}
