import { useState } from "react";
import "./DeviceForm.style.css";
import { IDevice } from "./Device.type";

type Props = {
    onBackBtnClickHand: () => void;
    onSubmitClickHnd: (data: IDevice) => void
}; 


const AddNewDevice = (props: Props) => {

    const [deviceName, setDeviceName] = useState("")
    const [deviceType, setDeviceType] = useState("")
    const [ownerName, setOwnerName] = useState("")
    const [batteryStatus, setBatteryStatus] = useState("")

    const { onBackBtnClickHand, onSubmitClickHnd } = props;

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
        const data: IDevice = {
            id: '',
            deviceName: deviceName,
            deviceType: deviceType,
            ownerName: ownerName,
            batteryStatus: batteryStatus,
        }
        onSubmitClickHnd(data);
        onBackBtnClickHand();
    }
    return (
            <div className="form-container">
            <div>
                <h3>Add New Device</h3>
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
                    <input type="submit" value="Add Device"></input>
                </div>
            </form>
            </div>
                    )
};



export default AddNewDevice;
