export default function InfoCard({ title, description }) {
    return (
      <div className="p-4 border rounded shadow-md dark:bg-gray-800 dark:text-white">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }