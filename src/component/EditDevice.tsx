import { IDevice } from "./Device.type";
import "./DeviceForm.style.css";
import { useState } from "react";

type Props = {
    data: IDevice;
    onBackBtnClickHand: () => void;
    onUpdateClickHnd: (data: IDevice) => void
};


const EditDevice = (props: Props) => {
    const { data, onBackBtnClickHand , onUpdateClickHnd} = props;
     const [deviceName, setDeviceName] = useState(data.deviceName)
    const [deviceType, setDeviceType] = useState(data.deviceType)
    const [ownerName, setOwnerName] = useState(data.ownerName)
    const [batteryStatus, setBatteryStatus] = useState(data.batteryStatus)

    const onDeviceNameChangeHnd = (e: any) => {
        setDeviceName(e.target.value)
    }
    const onDeviceTypeChangeHnd = (e: any) => {
        setDeviceType(e.target.value)
    }
    const onOwnerNameChangeHnd = (e: any) => {
        setOwnerName(e.target.value)
    }
    const onBatteryStatusChangeHnd = (e: any) => {
        setBatteryStatus(e.target.value)
    };

    
const onSubmitBtnClickHnd = (e: any) => {
        e.preventDefault();
        const UpdatedData: IDevice = {
            id: data.id,
            deviceName: deviceName,
            deviceType: deviceType,
            ownerName: ownerName,
            batteryStatus: batteryStatus,
        }
        onUpdateClickHnd(UpdatedData);
        onBackBtnClickHand();
    }

    return (
         <div className="form-container">
            <div>
                <h3>Update Device</h3>
            </div>
            <form onSubmit={onSubmitBtnClickHnd}> 
                <div>
                    <label>Device Name : </label>
                    <input type="text" value={deviceName} onChange={onDeviceNameChangeHnd}/>
                </div>
                 <div>
                    <label>Device Type : </label>
                    <input type="text" value={deviceType} onChange={onDeviceTypeChangeHnd}/>
                </div>
                 <div>
                    <label>Owner Name : </label>
                    <input type="text" value={ownerName} onChange={onOwnerNameChangeHnd}/>
                </div>
                 <div>
                    <label>Battery Status : </label>
                    <input type="number" value={batteryStatus} onChange={onBatteryStatusChangeHnd}/>
                </div>
                <div>
                    <input type="button" value="Back" onClick={onBackBtnClickHand}></input>
                    <input type="submit" value="Update"></input>
                </div>
            </form>
            </div>
    )
}

export default EditDevice;