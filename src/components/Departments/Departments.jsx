import React, { useState } from "react";
import "./Departments.css";

import ReadMoreTag from "../Reusables/ReadMoreTextComponent/ReadMoreTag";

import { departmentData } from "../../data/departmentData";
import ArrowLeft from "../../assets/leftArrow.png";
import ArrowRight from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
const Departments = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const transition = { type: "spring", duration: 4 };

  return (
    <div className="Departments" id="departments">
      <span>Departments</span>
      <span className="stroke-text">A message from</span>
      <span>
        the <span>{departmentData[activeDepartment].department}</span>{" "}
        department
      </span>
      <div className="departmentBody">
        <div className="department-l">
          <div className="articleDetail">
            <ReadMoreTag
              text={departmentData[activeDepartment].details}
              ideal={2000}
              min={1960}
              max={2040}
            />
          </div>
          <div className="blur departmentBlur"></div>
          <div className="writtenBy">
            <span>Written by</span>
            <div>
              <img src={departmentData[activeDepartment].authordp} alt="" />
              <span>{departmentData[activeDepartment].name}</span>
            </div>
            <span>{departmentData[activeDepartment].status}</span>
          </div>
        </div>
        <div className="department-r">
          <div className="arrows">
            <motion.img
              src={ArrowLeft}
              alt=""
              onClick={() => {
                var allDep = departmentData.length - 1;
                var next =
                  activeDepartment - 1 < 0 ? allDep : activeDepartment - 1;
                setActiveDepartment(next);
              }}
              initial={{ opacity: 0.5, x: -100, scale: 2 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ ...transition, duration: 2 }}
            />
            <motion.img
              src={ArrowRight}
              alt=""
              onClick={() => {
                var allDep = departmentData.length - 1;
                var next =
                  activeDepartment + 1 > allDep ? 0 : activeDepartment + 1;
                setActiveDepartment(next);
              }}
              initial={{ opacity: 0.5, x: 100, scale: 2 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ ...transition, duration: 2 }}
            />
          </div>
          <div className="articleImageContainer">
            <motion.div
              className="backDivSolid"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transition, type: "tween", duration: 2 }}
            ></motion.div>
            <motion.div
              className="backDivStroke"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...transition, type: "tween", duration: 2 }}
            ></motion.div>
            <div className="articleImage">
              <img src={departmentData[activeDepartment].image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
