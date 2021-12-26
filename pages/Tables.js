import StatusCard from "./components/StatusCard";
import TableCard from "./components/TableCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import PaidIcon from "@mui/icons-material/Paid";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

export default function Tables() {
  return (
    <>
      <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
            <StatusCard
              color="pink"
              icon={<TrendingUpIcon />}
              title="Traffic"
              amount="350,897"
              percentage="3.48"
              percentageIcon={<ArrowUpwardIcon />}
              percentageColor="green"
              date="Since last month"
            />
            <StatusCard
              color="orange"
              icon={<GroupsIcon />}
              amount="2,356"
              percentage="3.48"
              percentageIcon={<ArrowDownwardIcon />}
              percentageColor="red"
              date="Since last week"
            />
            <StatusCard
              color="purple"
              icon={<PaidIcon />}
              title="Sales"
              amount="924"
              percentage="1.10"
              percentageIcon={<ArrowDownwardIcon />}
              percentageColor="orange"
              date="Since yesterday"
            />
            <StatusCard
              color="blue"
              icon={<InsertChartIcon />}
              title="Performance"
              amount="49,65%"
              percentage="12"
              percentageIcon={<ArrowUpwardIcon />}
              percentageColor="green"
              date="Since last month"
            />
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1 px-4 mb-16">
            <TableCard />
          </div>
        </div>
      </div>
    </>
  );
}
