export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-light-yellow shadow-md rounded-lg py-6 px-4"
    >
      <h2 className="text-3xl font-bold text-center">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="text-center">
          <h3 className="text-xl font-bold">HTML</h3>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">CSS</h3>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">React</h3>
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">NextJS</h3>
        </div>
      </div>
    </section>
  );
}
