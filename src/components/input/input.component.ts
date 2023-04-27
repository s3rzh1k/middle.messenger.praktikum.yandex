import Block from "../../classes/Block";
import templateInput from "./input.component.hbs";
import "./input.component.scss";

type TAttr = Record<string, string>;
export type TValidation = {
  required?: boolean;
  confirm?: string;
  mask?: RegExp | null;
  minlength?: number;
  maxlength?: number;
  validMsg?: string | null;
};
type TInput = {
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  value?: string;
  attr?: TAttr;
  validation?: TValidation;
  error?: string;
  [x: string]: unknown;
};
export default class Input extends Block {
  currentValue: string | number | undefined;

  constructor(props: TInput) {
    super("label", props, templateInput);
    this.currentValue = props.value ?? "";
  }

  componentDidUpdate(oldProps: TInput, newProps: TInput): boolean {
    let update = false;
    Object.keys(newProps).forEach((key) => {
      if (oldProps[key] !== newProps[key]) {
        if (key === "error") {
          this.errorUpdate();
        } else {
          update = true;
        }
        if (key === "value") this.currentValue = newProps[key];
      }
    });
    return update;
  }

  // eslint-disable-next-line class-methods-use-this
  setCurrentValue(self: Input, e: Event): void {
    // eslint-disable-next-line no-undef
    const target = e?.target as HTMLInputElement;
    // eslint-disable-next-line no-param-reassign
    self.currentValue = target.value;
  }

  _addEvents(): void {
    this.events.setCurrentValue = this.setCurrentValue.bind("", this);
    this._element.addEventListener("input", this.events.setCurrentValue);
    super._addEvents();
  }

  _removeEvents(): void {
    this._element.removeEventListener("input", this.events.setCurrentValue);
    super._removeEvents();
  }

  errorUpdate(): void {
    const errorBlock = this._element.querySelector(".error") ?? "";
    if (!errorBlock) return;
    errorBlock.textContent = this.props.error;
  }

  render() {
    return this.compile({ ...this.props, data_idc: this._id });
  }
}
