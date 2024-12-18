export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-baby-pink shadow-lg p-4 z-50 font-jost">
      <h2 className="text-2xl font-bold mb-4 text-center text-dark-pink">
        About Me
      </h2>
      <div className="flex justify-center items-center">
        <div className="relative mb-4">
          <img
            src="/asset/kayla-portofolio.png"
            alt="Kayla's Portofolio"
            className="rounded-full w-40 h-40 border-8 border-beige-white object-cover shadow-md
          "
          />
          <div className="bg-green-500 rounded-full w-8 h-8 shadow-md absolute bottom-2 right-2"></div>
        </div>
      </div>
      <div className="bg-light-blue rounded-md text-dark-black p-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-dark-blue px-2 py-1 font-bold rounded-md">Age</div>
          <div>16</div>

          <div className="bg-dark-blue px-2 py-1 font-bold rounded-md">
            Residence
          </div>
          <div>PR</div>

          <div className="bg-dark-blue px-2 py-1 font-bold rounded-md">
            Freelance
          </div>
          <a href="/contact" className="text-green-500 hover:underline">
            Available
          </a>
          <div className="bg-dark-blue px-2 py-1 font-bold rounded-md">
            Address
          </div>
          <div>Melbourne, Australia</div>
        </div>
        <hr className="border-t-2 border-dark-black opacity-15" />
        <div className="my-4">
          <div className="bg-dark-blue px-2 py-1 font-bold rounded-md inline-block">
            Status
          </div>
          <div className="mt-2">
            Currently a student at Monash University pursuing a Bachelor of
            Computer Science and Commerce and Master of Software Engineering
          </div>
          <hr className="border-t-2 border-dark-black opacity-15 mt-4" />
        </div>
        <div className="my-4">
          <div className="bg-dark-blue px-2 py-1 font-bold rounded-md inline-block">
            Core Skills
          </div>
          <div className="mt-2">Javascript, Phyton, C++</div>
          <hr className="border-t-2 border-dark-black opacity-15 mt-4" />
        </div>
      </div>
    </aside>
  );
}
