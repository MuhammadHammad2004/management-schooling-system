import React from "react";
import { Navbar } from "../../../Components/Navbar/Navbar";
import { Accountselect } from "../../../Components/AccountSlelection/Accountselect";
import FeeVoucherCard from "../../../Components/VoucherCard/VoucherCard";

export const FeeVoucher = () => {
  return (
    <div>
      <Navbar />
      <div style={{ position: "absolute", top: "7rem" }}>
        <FeeVoucherCard />
      </div>
    </div>
  );
};
