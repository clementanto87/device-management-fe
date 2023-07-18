import "./DeviceList.style.css";
import { IDevice } from "./Device.type";


type Props = {
    list: IDevice[];
    onEdit: (data: IDevice) => void;
};

const DeviceList = (props: Props) => {
    const { list , onEdit} = props;
    return (
        <div>
            <article>
                <h3 className="list-header">DeviceList</h3>
            </article>
        <table>
  <tr>
    <th>Device Name</th>
    <th>Device Type</th>
                <th>Owner Name</th>
                <th>Baterry Status</th>
                 <th>Action</th> 
            </tr>
            {list.map((device) => {
                return (
                    <tr key={device.id}>
                        <td>{`${device.deviceName}`}</td>
                        <td>{`${device.deviceType}`}</td>
                        <td>{`${device.ownerName}`}</td>
                        <td>{`${device.batteryStatus}`}</td>
                        <td>
                            <div>
                                
                                <input type="button" value="Update" onClick={() =>onEdit (device)}></input>
                               
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