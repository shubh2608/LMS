import React, {Component} from 'react';
import CircularProgressExampleDeterminate from './cv/hf'
import Ex_Batch from './cv/bc';
import ComponentCard from './cv/cc';

export default class Dmain extends Component {
render() {
     return (
        <div className="container">
		  <div className="row">
		    <div className="col-lg-6">
		    <CircularProgressExampleDeterminate />
		     <Ex_Batch/>
		    </div>
		    <div className="col-lg-6">
		    <ComponentCard/>
		    </div>
		  </div>
    	</div>
     );
   }
 }