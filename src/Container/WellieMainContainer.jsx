import React, { useState, useEffect } from "react";
import { BEAPIROOT, LOCALHOST } from "config";
import WellieMain from "../Pages/WellieMain/WellieMain";

export const WellieMainContainer = () => {
  const [leftStrings, setLeftStrings] = useState([]);
  const [covers, setCovers] = useState([]);
  const [priceCardString, setPriceCardString] = useState([]);

  useEffect(() => {
    fetch(`${BEAPIROOT}/book?limit=55`)
      .then((res) => res.json())
      .then((res) => {
        setCovers(res.MESSAGE);
      })
      .catch((err) => console.log("Catched errors!!", err));
  }, []);

  useEffect(() => {
    fetch(`${LOCALHOST}/data/dataOfMain.json`)
      .then((res) => res.json())
      .then(
        (res) => {
          setLeftStrings(res.LEFTSTRINGS);
          setPriceCardString(res.PRICECARDSTRINGS);
        },
        () => {
          console.log("Catched errors!!");
        }
      );
  }, []);

  const WellieMainProps = {
    leftStrings,
    covers,
    priceCardString,
  };

  return <WellieMain {...WellieMainProps} />;
};
