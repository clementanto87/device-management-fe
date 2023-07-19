import AddNewDevice from "./AddNewDevice";
import { IDevice, PageEnum, dummyDeviceList } from "./Device.type";
import DeviceList from "./DeviceList";
import EditDevice from "./EditDevice";
import "./Home.style.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const baseUrl = "http://localhost:3001/items";

  const [deviceList, setDeviceList] = useState<IDevice[]>([]);

  useEffect(() => {
    const devices = axios.get(baseUrl).then((res) => {
      setDeviceList([...(res.data as IDevice[])]);
    });
  }, []);

  const [ShownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IDevice);

  const onAddDeviceClickHandler = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = async () => {
    const devices = await axios.get(baseUrl);
    setDeviceList([...(devices.data as IDevice[])]);
    setShownPage(PageEnum.list);
  };

  const addNewDevice = async (data: IDevice) => {
    setDeviceList([...deviceList, data]);
    const devices = await axios.post(baseUrl, data);
    console.log("add devices " + devices);
  };

  const editDeviceData = async (data: IDevice) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = async (data: IDevice) => {
    const devices = await axios.put(baseUrl + "/" + data.id, data);
    setDeviceList([...(devices.data as IDevice[])]);
    showListPage();
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1> React : Device Management App</h1>
        </header>
      </article>

      <section className="section-content">
        {ShownPage === PageEnum.list && deviceList.length > 0 && (
          <>
            <input
              type="button"
              value="Add NewDevice"
              onClick={onAddDeviceClickHandler}
              className="add-newdevice-btn"
            ></input>
            <DeviceList list={deviceList} onEdit={editDeviceData} />
          </>
        )}

        {ShownPage === PageEnum.add && (
          <AddNewDevice
            onBackBtnClickHand={showListPage}
            onSubmitClickHnd={addNewDevice}
          />
        )}

        {ShownPage === PageEnum.edit && (
          <EditDevice
            data={dataToEdit}
            onBackBtnClickHand={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
