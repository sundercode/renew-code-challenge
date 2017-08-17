import React from 'react';
import { expect, assert } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import DateTable from '../src/components/DateTable';

describe("A suite for DateTable", () => {
    it("renders DataTable when the sunriseData exists", function() {
      const wrapper = shallow(<DateTable />);
      wrapper.setState({ sunriseData: {} });
      expect(wrapper.find('DataTable')).to.have.length(1);
    });
});
