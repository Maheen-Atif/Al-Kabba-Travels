export function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-8 md:px-16 lg:px-24 py-12 bg-white text-black">
        <div className="flex flex-col gap-4">
          <img
            alt="pic"
            src="https://www.alkabbatravel.com/uploads/1743176950.alkabba-new-logo.jpg"
            className="w-44"
          />

          <p className="text-gray-500 leading-7">
            Alkabba Travel has you covered! From life-changing
            pilgrimages to dream vacations, we make it easy.
            Get personalized service, unbeatable deals, and
            unforgettable experiences.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            Top Destinations
          </h1>

          <p className="text-gray-500">USA, UK, Europe</p>
          <p className="text-gray-500">Australia</p>
          <p className="text-gray-500">Dubai, Saudi Arabia</p>
          <p className="text-gray-500">Nigeria</p>
          <p className="text-gray-500">Pakistan, India</p>
          <p className="text-gray-500">Turkey</p>
        </div>

  
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">
            Contact Us
          </h1>

          <div>
            <h1 className="font-bold">Email</h1>
            <p className="text-gray-500">
              quotes@alkabbatravel.com
            </p>
          </div>

          <div>
            <h1 className="font-bold">Phone</h1>
            <p className="text-gray-500">
              +1 773 300 3023
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <img
              className="w-6 h-6"
              src="https://www.alkabbatravel.com/website/images/uk-flag-icon.png"
              alt="UK"
            />
            <h1 className="font-bold">
              London Address
            </h1>
          </div>

          <p className="text-gray-500">
            Level 17 Dashwood House 69 Old Broad
            Street London EC2M 1QS
          </p>

          <div className="flex gap-2 items-center">
            <img
              className="w-5 h-5"
              src="https://www.alkabbatravel.com/website/images/usa-icon-flag.png"
              alt="USA"
            />
            <h1 className="font-bold">
              USA Address
            </h1>
          </div>

          <p className="text-gray-500">
            9933 Franklin Ave, Franklin Park
            Suite 135 IL 60131 USA
          </p>
        </div>
        
      </div>
      <p className="text-center m-4 border-t border-black">
            © 2026 alkabbatravel.com, Inc. All Rights Reserved.
        </p>
    </>
  );
}