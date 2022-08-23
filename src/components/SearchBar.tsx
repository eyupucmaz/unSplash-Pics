import React, {
  ChangeEvent,
  ChangeEventHandler,
  Component,
  FormEvent,
  FormEventHandler,
} from 'react';

interface SearchBarProps {
  onSubmit: Function;
}

interface SearchBarState {
  inputText: string;
}

export default class SearchBar extends Component<
  SearchBarProps,
  SearchBarState
> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      inputText: '',
    };
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  //! Add a type to event handling methods
  // First approach is add a type to event. React has a own type "ChangeEvent"
  // Most common!
  // onInputChange(e: ChangeEvent<HTMLInputElement>) {
  //   console.log(e.target.value);
  //   //! This method can not access the 'this' keyword of class, to solve this issue
  //   //! 1 -> We can bind the this keyword on constructor
  //   //!       this.onChangeInput = this.onChangeInput.bind(this)
  //   console.log(this.state.inputText);
  // }
  //! OR turn into arrow function
  onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputText: event.target.value });
  };

  // Second one is typing the handler method with "ChangeEventHandler"
  // onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
  //   console.log(e.target.value);
  // };

  // onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   console.log(event.preventDefault());
  //   console.log(this.state);
  // };

  onFormSubmit: FormEventHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state.inputText);
    this.setState({ inputText: '' });
  };

  render() {
    return (
      <div className="w-full sm:w-1/2">
        <form
          onSubmit={this.onFormSubmit}
          className="w-full p-4 sm:py-6 sm:px-3"
          style={{ margin: '0' }}
        >
          <input
            type={'text'}
            value={this.state.inputText}
            onChange={this.onInputChange}
            className="w-full pl-3 p-2 bg-gray-100 hover:border-1 hover:border-gray-400  focus:outline-none rounded-full text-purple-800 text-md border"
            placeholder="Search free high-resolution photos"
          />
        </form>
      </div>
    );
  }
}
