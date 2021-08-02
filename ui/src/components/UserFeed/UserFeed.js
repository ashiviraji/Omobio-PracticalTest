import React, {Component} from 'react';
//import Linkify from 'react-linkify';
import './UserFeed.css';
//import TimeAgo from 'react-timeago';
class UserFeed extends Component {

constructor(props){
super(props);
}

render() {

let userFeed = this.props.feedData
.map(function (feedData, index) {
  console.log(this.props.feedData[0].email)
  let size=this.props.feedData.length;
  console.log(size);
  
return (
  
<div className="medium-12 columns" key={index}>

<div className="people-you-might-know">

<div className="row add-people-section">
<div className="small-12 medium-10 columns about-people">

<div className="about-people-author">

    <div className="form-group">
    <label for="exampleInputPassword1"> Id</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={this.props.feedData[index].user_id} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1"> Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={this.props.feedData[index].name} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Email</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={this.props.feedData[index].email} />
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">User Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1" value={this.props.feedData[index].username} />
  </div>



        
     
       
<br/>



</div>
</div>
<div className="small-12 medium-2 columns add-friend">


</div>
</div>
</div>
</div>
)
}, this);

return (
<div>
{userFeed}

</div>
);
}

}

export default UserFeed;