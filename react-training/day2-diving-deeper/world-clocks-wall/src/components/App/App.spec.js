import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App.js'
import * as ReactDOM from "react-dom";


const renderComp = comp => {
    const div = document.createElement('div');
    ReactDOM.render(comp, div);
    return div;
};

const createDriver = comp => {

    return {
        getCityNameByIndex: (index) => comp.querySelectorAll("li")[index].querySelector(".city-name").textContent,
        getNumberOfClocks: () => comp.querySelectorAll("li").length,
        clickRemove: (index) => ReactTestUtils.Simulate.click(comp.querySelectorAll("li")[index].querySelector(".remove-button")),
        clickEdit: (index) => ReactTestUtils.Simulate.click(comp.querySelectorAll("li")[index].querySelector(".edit-btn")),
        clickDone: (index) => ReactTestUtils.Simulate.click(comp.querySelectorAll("li")[index].querySelector(".done-btn")),
        editInput: (index, value) => ReactTestUtils.Simulate.change(comp.querySelectorAll("li")[index].querySelector(".edit-input"), {target: {value: value}}),
        editAddClockInput: (value) => ReactTestUtils.Simulate.change(comp.querySelector(".add-clock-input"), {target: {value: value}}),
        editAddClockTimeZone: (value) => ReactTestUtils.Simulate.change(comp.querySelector(".add-clock-time-zone"), {target: {value: value}}),
        clickAdd: () => ReactTestUtils.Simulate.click(comp.querySelector(".add-btn"))
    }
};

describe('App', () => {

    it('should remove a clock', () => {

      const appComponent = renderComp(<App />);
      const driver = createDriver(appComponent);

      const clocksBeforeRemove = driver.getNumberOfClocks();
      const nameOfCityBeforeRemove = driver.getCityNameByIndex(0);
      driver.clickRemove(0);

      expect(driver.getNumberOfClocks()).to.eq(clocksBeforeRemove - 1);
      expect(driver.getCityNameByIndex(0)).to.not.eq(nameOfCityBeforeRemove);
  });

    it('should edit a clock with a new city name', () => {

        const appComponent = renderComp(<App />);
        const driver = createDriver(appComponent);

        const clockIndex = 3;
        const cityBeforeEdit = driver.getCityNameByIndex(clockIndex);
        const newCityName = "London";

        driver.clickEdit(clockIndex);
        driver.editInput(clockIndex,newCityName);
        driver.clickDone(clockIndex);

        expect(driver.getCityNameByIndex(clockIndex)).to.eq(newCityName);
        expect(driver.getCityNameByIndex(clockIndex)).to.not.eq(cityBeforeEdit);
    });

    it('should not edit a clock with an empty name', () => {

        const appComponent = renderComp(<App />);
        const driver = createDriver(appComponent);

        const clockIndex = 3;
        const cityBeforeEdit = driver.getCityNameByIndex(clockIndex);
        const newCityName = "";

        driver.clickEdit(clockIndex);
        driver.editInput(clockIndex,newCityName);
        driver.clickDone(clockIndex);

        expect(driver.getCityNameByIndex(clockIndex)).to.not.eq(newCityName);
        expect(driver.getCityNameByIndex(clockIndex)).to.eq(cityBeforeEdit);
    });


    it('Test you can add a new Clock and it shows on the Wall', () => {
        const appComponent = renderComp(<App />);
        const driver = createDriver(appComponent);

        const newCityName = "Amsterdam";
        driver.editAddClockInput(newCityName);
        driver.editAddClockTimeZone(6);
        driver.clickAdd();

        expect(driver.getCityNameByIndex(0)).to.eq(newCityName);
    });


});
