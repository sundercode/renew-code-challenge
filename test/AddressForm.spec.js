import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import AddressForm from '../src/components/AddressForm';

describe("A suite for AddressForm", () => {
  it("renders exactly one Form component", function() {
      const wrapper = shallow(<AddressForm />);
      expect(wrapper.find('Form')).to.have.length(1);
  });

  it("renders Latitude/Longitude text when 'hasSubmitted' is true", function() {
      const wrapper = shallow(<AddressForm />);
      wrapper.setState({ hasSubmitted: true });
      expect(wrapper.find('p')).to.have.length(1);
  });

});
