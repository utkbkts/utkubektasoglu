interface Props {
  reply?: string;
}

const Reviews = ({ reply }: Props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex p-4">
        <div className="flex-shrink-0">
          <img
            src="/avatar.png"
            alt="User avatar"
            className="h-16 w-16 rounded-full border-2 border-gray-300"
          />
        </div>
        <div className="mt-4 md:mt-0 md:ml-4">
          <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
            ex sed neque tincidunt consectetur.
          </p>
          {reply && (
            <div className="mt-4 bg-gray-100 p-3 rounded-md border-l-4 border-blue-500">
              <h4 className="text-sm font-semibold text-blue-600">
                Admin Response
              </h4>
              <p className="text-gray-700">{reply}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
