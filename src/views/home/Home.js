import React from "react";
import NewFooter from "../../common/newfooter/NewFooter";
import Header from "../../common/header/Header";
import DemoService from "./demoService/DemoService";
import Background from "../../common/background/Background";
import Welcome from "./welcome/Welcome";
import Prices from "./prices/Prices";
import News from "./news/News";
import DirectMeetInfo from "./directMeetInfo/DirectMeetInfo";
import SuccessStories from "./SuccessStories";
import NumberMeaning from "./numbermeaning/NumberMeaning";
import NewBanner from "./newBanner/NewBanner";
import dataApi from "../../api/dataApi";
import Banners from "./banners/Banners";

const AppHome = () => {
  const [data, setData] = React.useState({
    banner: [],
    numberMeaning: [],
    info: [],
    serviceInfo: [{ details: [] }, { details: [] }],
    services: [],
    bankingInfo: [],
    successStories: [],
  });

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await dataApi.getData();
      setData(res.data);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Background />
      <NewBanner />
      <NumberMeaning data={data.numberMeaning} />
      <Welcome data={data.info} />
      <DemoService data={data?.serviceInfo[0]} />
      <Prices data={data.services} />
      <DirectMeetInfo
        data={data?.serviceInfo[1]}
        bankingData={data.bankingInfo}
      />
      <SuccessStories data={data.successStories} />
      <News />

      <NewFooter />
    </React.Fragment>
  );
};

export default AppHome;
