import "./DeviceList.style.css";
import { IDevice } from "./Device.type";
import { useState } from "react";

type Props = {
  list: IDevice[];
  onEdit: (data: IDevice) => void;
};

const DeviceList = (props: Props) => {
  const { list, onEdit } = props;
  const [tableList, setTableList] = useState([...list]);

  const [order, setOrder] = useState("ASC");

  const sorting = (type: any) => {
    if (order == "ASC") {
        const sorted = list.sort((a: any, b: any) => a[type].localeCompare(b[type]))
        setOrder('DESC')
        setTableList([...sorted])
    }
    if (order == "DESC") {
        const sorted = list.sort((a: any, b: any) => b[type].localeCompare(a[type]))
        setOrder('ASC')
        setTableList([...sorted])
    }
  };
  return (
    <div>
      <article>
        <h3 className="list-header">DeviceList</h3>
      </article>
      <table>
        <tr>
          <th onClick={() => sorting("deviceName")}>Device Name</th>
          <th onClick={() => sorting("deviceType")}>Device Type</th>
          <th onClick={() => sorting("ownerName")}>Owner Name</th>
          <th onClick={() => sorting("batteryStatus")}>Baterry Status</th>
          <th>Action</th>
        </tr>
        {tableList.map((device) => {
          return (
            <tr key={device.id}>
              <td>{`${device.deviceName}`}</td>
              <td>{`${device.deviceType}`}</td>
              <td>{`${device.ownerName}`}</td>
              <td>{`${device.batteryStatus}`}</td>
              <td>
                <div>
                  <input
                    type="button"
                    value="Update"
                    onClick={() => onEdit(device)}
                  ></input>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
      <input type="button" value="Sort"></input>
      <input type="button" value="Save"></input>
    </div>
  );
};

export default DeviceList;
