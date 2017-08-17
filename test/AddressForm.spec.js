import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import AddressForm from '../src/components/AddressForm';

describe("A suite for AddressForm", () => {
  it("renders exactly one component", function() {
      const wrapper = shallow(<AddressForm />);
      expect(wrapper.find(AddressForm)).to.have.length(1);
  });
});
