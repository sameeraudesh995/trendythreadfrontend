import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";

const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object top"
            src="https://rukminim1.flixcart.com/image/612/612/xif0q/jean/h/y/g/34-jeans-bt008-laheja-original-imagqqbsfgmdhcvn.jpeg?q=70"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1 ">
          <p className="font-semibold">Men Regular Mid Rise Black Jeans</p>
          <p className="opacity-70 ">Size: L,White</p>
          <p className="opasity-70 mt-2 ">Seller: LAHEJA</p>
          <div className="flex space-x-5 item-center  text-gray-900 pt-6">
            <p className="font-semibold ">LKR499</p>
            <p className="opasity-50 line-through ">LKR1599</p>
            <p className="text-green-600 font-semibold">60%</p>
          </div>
        </div>
      </div>
      <div className="lg:flex item-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton>
            <AddCircleOutlineIcon sx={{ color: "#9155FD" }} />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "#9155FD" }}>remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
