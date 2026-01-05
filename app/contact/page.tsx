export default function Contact() {
  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-teal-400">Contact</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Nom"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <button className="bg-teal-500 text-gray-900 px-4 py-2 rounded hover:bg-teal-400">
          Envoyer
        </button>
      </form>
    </section>
  );
}
