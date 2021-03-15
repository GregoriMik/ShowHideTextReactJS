class Message extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
  }

  handleMessageButton(){
    this.setState({
      messageIsActive: !this.state.messageIsActive
    })
  }

  render(){
 console.log(this.state.messageIsActive);
    const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias sed. Aliquid in deserunt obcaecati ratione voluptatibus, amet rem numquam repudiandae dolorum nemo recusandae ipsa porro, quia alias ipsam. Sed, nesciunt blanditiis, cupiditate odio quos similique illum, delectus voluptatem excepturi asperiores illo sint adipisci? Placeat quidem, assumenda sit dicta facere incidunt minima iusto, pariatur non voluptate quos error libero amet eligendi, exercitationem dolorum cupiditate vero sunt possimus inventore obcaecati vel voluptatibus! Amet exercitationem accusantium debitis consectetur molestiae qui odit ad libero obcaecati dolores nam maiores, doloribus sed numquam voluptatum enim ex aliquam minus mollitia! Non debitis vel accusamus reiciendis praesentium?'

    return (
    <React.Fragment>
      <button onClick={this.handleMessageButton}>
      {this.state.messageIsActive ?   "Ukryj":"Pokaż" }</button>
      {this.state.messageIsActive ? <p>{text}</p> : null}
    </React.Fragment>
      )
  }
}
ReactDOM.render(<Message/>, document.getElementById('root'))

// <p>{this.state.messageIsActive && text}</p>
