import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { LabelledInput } from "../components/Input";
import axios from 'axios';


jest.mock('axios');

const wrapper = {
  doSomething() {
    console.log('INSIDE doSomething...');
  }
}

const otherDo = () => {
  wrapper.doSomething();
}


describe('otherDo', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should call wrapper.doSomething', () => {
    const doSomethingSpy = jest.spyOn(wrapper, 'doSomething');
    otherDo();

    expect(doSomethingSpy).toHaveBeenCalled();
  });

  it('should mock axios', async () => {
    // @ts-ignore
    axios.get.mockResolvedValue({ data: { id: 1, name: 'Qausim' } });

    const data = await axios.get('http://localhost:9000');

    expect(data).toBeDefined();
  });
});

describe('LabelInput', () => {
  it('should render input element with label', () => {
    const mockChangeHandler = jest.fn();
    const mockFocusHandler = jest.fn();
    const mockBlurHandler = jest.fn();

    render(
      <LabelledInput
        id="my-input"
        label="My Input"
        value="something"
        onChange={mockChangeHandler}
        onFocus={mockFocusHandler}
        onBlur={mockBlurHandler}
      />
    );

    const input = screen.getByDisplayValue("something");
    const label = screen.getByText(/my input/i);
    expect(input).toHaveAttribute("id", "my-input");
    expect(label).toHaveAttribute("for", "my-input");
    fireEvent.input(input, { target: { value: "whatever" } });
    expect(mockChangeHandler).toBeCalledTimes(1);
    input.focus();
    expect(mockFocusHandler).toBeCalled();
    input.blur();
    expect(mockBlurHandler).toBeCalled();
  });

  it('should match snapshot', () => {
    const mockChangeHandler = jest.fn();

    expect(render(
      <LabelledInput
        id="my-input"
        label="My Input"
        value="something"
        onChange={mockChangeHandler}
      />
    )).toMatchSnapshot();
  });
});
