import Link from "next/link";

export default function InsuranceSuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4 text-green-600">Success!</h1>
      <p className="text-gray-600">Your insurance application has been submitted successfully.</p>

      <Link href="/" className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Go Back to Home
      </Link>
    </div>
  );
}
