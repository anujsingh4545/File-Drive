import {atom} from "recoil";

const CurrentGroup = atom({
  key: "CurrentGroup",
  default: "Personal Account",
});

export default CurrentGroup;
