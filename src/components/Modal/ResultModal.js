import React from "react";
import { connect } from "react-redux";

import './ResultModal.css';
import { newGame } from '../../store/actions/health';

const ResultModal = ({ gameOver, winner, newGame}) => {
 
    if(gameOver){
      const createModal = () => {
        return (
          <div className="result-modal">

            <div className="modal"> 

              <div className="content">

                <h2>Game Over</h2>

                <div>{winner} won!!!</div>
                
                <button className="newGame-btn" onClick={newGame}>New Game</button>

              </div>  

            </div>
  
          </div>
        );
      }

      return (createModal());
      
    }
    return null;    
  }


const mapStateToProps = (state) => ({
  gameOver: state.health.gameOver,
  winner: state.health.winner,
});

export default connect(mapStateToProps, {newGame})(ResultModal);




