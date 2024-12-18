interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Hero({ toggleSidebar }: HeaderProps) {
  return (
    <section
      id="hero"
      className="bg-beige-white py-16 shadow-md rounded-lg mt-20 flex justify-center items-center"
    >
      <div>
        <img
          src="/asset/kayla-portofolio.png"
          alt="Kayla's Portofolio"
          className="rounded-full p-5 w-64 h-64 object-cover"
        />
      </div>
      <div className="p-3">
        <h2 className="text-4xl font-bold mb-4">
          Hello! I'm Kayla Elisheva, a{" "}
          <span className="text-dark-blue">Software Engineer!</span>
        </h2>
        <p className="text-lg">
          Bringing your ideas to life with clean and modern designs ⸜(｡˃ ᵕ ˂ )⸝♡
        </p>
        <button
          onClick={toggleSidebar}
          className="bg-dark-blue
         text-white py-2 px-4 mt-4 rounded-lg hover:bg-dark-black"
        >
          About Me
        </button>
      </div>
    </section>
  );
}
