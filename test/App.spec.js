import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from '../src/components/App';

describe("A suite for App", () => {
  it("renders exactly one AddressForm component", function() {
      const wrapper = shallow(<App />);
      expect(wrapper.find('AddressForm')).to.have.length(1);
  });

  it("renders exactly one TimeSelector component", function() {
      const wrapper = shallow(<App />);
      expect(wrapper.find('TimeSelector')).to.have.length(1);
  });
});
