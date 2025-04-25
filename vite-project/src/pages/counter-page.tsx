import Counter from "../components/counter/counter";

const CounterPage = () => {
  return (
    <section className="flex flex-col items-center justify-center h-custom bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <p className="text-lg mb-2">
          This is a simple counter page. Click the buttons to increment and
          decrement the counter.
        </p>

        <Counter />
      </div>
    </section>
  );
};

export default CounterPage;
