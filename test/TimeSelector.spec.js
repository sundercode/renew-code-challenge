import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import TimeSelector from '../src/components/TimeSelector';

describe("A suite for TimeSelector", () => {
    it("renders one Calendar component", function() {
        const wrapper = shallow(<TimeSelector />);
        expect(wrapper.find('DayPicker')).to.have.length(1);
    });

    it("renders no DateTable component by default", function() {
      const wrapper = shallow(<TimeSelector />);
      expect(wrapper.find('DateTable')).to.have.length(0);
    });

    it("renders DateTable when 'hasSubmitted' is true", function() {
      const wrapper = shallow(<TimeSelector />);
      wrapper.setState({ hasSubmitted: true });
      wrapper.setState({ timezoneData: {} });
      expect(wrapper.find('DateTable')).to.have.length(1);
    });

});
