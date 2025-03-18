import InvestmentTable from "./table";
import InvestmentGraph from "./graph";

export default function MyInvestments() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">📊 My Investments</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <InvestmentGraph />
        <InvestmentTable />
      </div>
    </div>
  );
}
