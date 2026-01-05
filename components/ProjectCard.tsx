type Props = {
  title: string;
  description: string;
};

export default function ProjectCard({ title, description }: Props) {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-teal-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
