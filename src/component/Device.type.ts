export interface IDevice {
  id: string;
  deviceName: string;
  deviceType: string;
  ownerName: string;
  batteryStatus: number | string;
}

export const dummyDeviceList: IDevice[] = [
  {
    id: "1",
    deviceName: "ApplePhone",
    deviceType: "SmartPhone",
    ownerName: "Maria",
    batteryStatus: 50,
  },
];

export enum PageEnum {
  list,
  add,
  edit,
}
