import Page from "../../components/Page";
import Table from "../../components/Table";
import { investments } from "../../data/samples";

function DashboardPage() {
  return (
    <Page>
      <h1 className="h-12 font-bold text-xl text-white flex items-center mb-4">
        투자 현황
      </h1>

      <Table columns={investments.columns} rows={investments.rows} />
    </Page>
  );
}

export default DashboardPage;
