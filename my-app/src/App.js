import React from 'react';
import disney from  'disney.json';
import './App.css';

class App extends Component {
  state = {
    princess,
    clickedPrincess: [],
    score: 0
  };

imageClick = event => {
    const currentPrincess = event.target.alt;
    const PrincessAlreadyClicked =
      this.state.clickedPrincess.indexOf(currentPrincess) > -1;

if (PrincessAlreadyClicked) {
        this.setState({
          princess: this.state.princess.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPrincess: [],
          score: 0
        });
          alert("You lost. Play again?");
} else {
          this.setState(
            {
              princess: this.state.princess.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPrincess: this.state.clickedPrincess.concat(
                currentPrincess
              ),
              score: this.state.score + 1
            },
        () => {
              if (this.state.score === 12) {
                alert("Yay! You Win!");
                this.setState({
                  princess: this.state.princess.sort(function(a, b) {
                    return 0.5 - Math.random();
                  }),
                  clickedPrincess: [],
                  score: 0
                });
              }
            }
          );
        }
      };
      render() {
        return (
          <div>
            <Navbar 
              score={this.state.score}
            />
            <Jumbotron />
            <div className="wrapper">
              {this.state.princess.map(princess => (
                <FriendCard
                  imageClick={this.imageClick}
                  id={princess.id}
                  key={princess.id}
                  image={princess.image}
                />
              ))}
            </div>
            <Footer />
          </div>
        );
      }
    }


export default App;


  