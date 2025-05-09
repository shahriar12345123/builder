const orgs = [
  { name: "DESCO", img: "https://i.ibb.co/6D3HY1r/desco.png" },
  { name: "NESCO", img: "https://i.ibb.co/Tk9zKbn/nesco.png" },
  { name: "WASA", img: "https://i.ibb.co/K7bZcX5/wasa.png" },
  { name: "PDB", img: "https://i.ibb.co/vzSmfBg/pdb.png" },
];

const Organizations = () => {
  return (
    <div className="max-w-5xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">We Work With</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {orgs.map((org, i) => (
          <div key={i} className="text-center p-4 border rounded shadow-sm">
            <img src={org.img} alt={org.name} className="h-16 mx-auto mb-2" />
            <p className="text-gray-700 font-medium">{org.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Organizations;
