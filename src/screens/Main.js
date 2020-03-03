import React from 'react';
import "firebase/storage";
import Navbar from "../components/Navbar.js";
import SliderComponent from "../components/SliderComponet";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../redux/Action";


 class Main extends React.Component {

  constructor(props){
    super(props);  
  }

  render() {
    return (
        <div className="Main">
        <Navbar/>
        <div className="Main_container">
            <div className="Main_box1_recomend">
                <h2>今季おすすめ</h2>
                  <SliderComponent/>
            </div>
            <div className="Main_box2_watching">
                <h2>視聴中</h2>
                  {/* <Slider/> */}
            </div>
            <div className="Main_box3_watched">
                <h2>視聴完了</h2>
                  {/* <Slider/> */}
            </div>
        <footer>
          <div className="footer_container">
              <small>© 2020 Keigo Sato</small>
          </div>
        </footer>
        </div>
        </div> 
    );
  }
}


const mapStateToProps = state => {
  // const length = state.api.items.length;
  // const currentState = state.api.items[length - 1]
  return {
    // items: state.api.items,
    // items_mix:state.api.items_mix
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
