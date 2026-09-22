import type { ReactNode } from "react"
import { useProfile } from "../../hooks/useProfile";



type DashboardPageProps={};

 const DashboardPage = ({}:DashboardPageProps):ReactNode => {

  const {data}=useProfile();
  console.log(data);
  return (
    <div className="">Hello from DashboardPage</div>
  );
}

export default DashboardPage;
