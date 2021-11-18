import React from 'react';
import Cards from './Cards';

export default class Crud extends React.Component {
    constructor(props) {
      super(props);
      this.state = { data: [], inputValue: '' };
      this.cardDelete = this.cardDelete.bind(this);
      this.onChangeHandler = this.onChangeHandler.bind(this);
      this.submitHandler = this.submitHandler.bind(this);
      this.refreshData = this.refreshData.bind(this);
    //   this.id = 0;
    }
    componentDidMount() {
      this.getData();
    //   this.setState({ data: actualData });
    //   this.id = actualData.length;
    }
  
    getData() {
      fetch('http://localhost:7777/notes')
        .then(response => response.json())
        .then(data => this.setState({ data: data }))
    }
  
    cardDelete(id) {
      fetch(`http://localhost:7777/notes/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.ok ? this.getData() : null);
    }
  
    onChangeHandler({ target: { value } }) {
      this.setState({ inputValue: value });
    }
  
    submitHandler(evt) {
      fetch('http://localhost:7777/notes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({content: this.state.inputValue})
          }).then(response => response.ok ? this.getData() : null);
      this.setState({inputValue: ''});

      evt.preventDefault();
    }
  
    refreshData() {
      this.getData();
    }
  
    render() {
      return (
        <React.Fragment>
          <h2>Notes</h2>
          <Cards data={this.state.data} cardDelete={this.cardDelete} />
          <h5>New note</h5>
          <form action="" onSubmit={this.submitHandler}>
            <input
              value={this.state.inputValue}
              onChange={this.onChangeHandler}
              type="text"
              required
            />
            <button className="create-button">Создать</button>
          </form>
          <button className="refresh-button" onClick={this.refreshData}>
            Обновить
          </button>
        </React.Fragment>
      );
    }
  }