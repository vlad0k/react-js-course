import React from "react";
import { create } from "react-test-renderer";

import ProfileStatus from './ProfileStatus';


describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status='it-kamasurta.com' />);
    const instance = component.getInstance();
    // console.log(instance);
    expect(instance.state.inputValue).toBe('it-kamasurta.com');
  });
  //
  // test("status from props should be in state", () => {
  //   const component = create(<ProfileStatus status='it-kamasurta.com' />);
  //   const instance = component.getInstance();
  //   expect(instance.state.status).toBe('it-kamasurta.com');
  // });
});
