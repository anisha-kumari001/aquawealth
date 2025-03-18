import Link from "next/link";

export default function BuyInsurancePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-4">Buy Insurance</h1>
      <p className="text-gray-600">Secure your future with our insurance plans.</p>

      <div className="mt-6 space-x-4">
        <Link href="/buy-insurance/form" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Start Insurance Application
        </Link>
        
        <Link href="/buy-insurance/success" className="text-gray-700 border border-gray-300 px-4 py-2 rounded hover:bg-gray-100">
          View Success Page
        </Link>
      </div>
    </div>
  );
}
