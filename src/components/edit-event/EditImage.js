import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Dropzone from 'react-dropzone';
import { uploadImage } from '../../actions/';

class EditImage extends Component {

  componentWillMount() {
    console.log(this.props);
  }

  constructor(props) {
    super(props);
    this.state = {
      rejected: false,
      accepted: true,
      file: true
    };
  }
  upload(files) {
    const file = files[0];
    this.props.uploadImage(file);
    this.setState({
      rejected: false,
      file: file,
      accepted: true
    });
  }

  reject() {
    this.setState({rejected: true});
  }

  remove(e) {
    e.preventDefault();
    this.setState({
      accepted: false,
      file: null
    });
  }


  render() {

    return (
      <div>
        {!this.state.accepted ?
        <Dropzone
          onDropAccepted={this.upload.bind(this)}
          onDropRejected={this.reject.bind(this)}
          style = {{
            width: 200,
            height: 200,
            margin: '20px auto',
            borderWidth: '4px',
            borderColor: '#767b91',
            borderStyle: 'dashed',
            borderRadius: '5px',
            padding: '20px'
          }}
          activeStyle = {{
            borderStyle: 'solid',
            backgroundColor: '#eee'
          }}
          rejectStyle = {{
            borderStyle: 'solid',
            backgroundColor: '#ffdddd'
          }}
          multiple={false}
          accept="image/jpeg, image/png, image/bmp, image/gif">
          { this.state.rejected ?
            <div className="center-align">Invalid file type. Please use jpeg, bmp, gif or png.</div> :
            <div className="center-align">Drag and drop an image here or click to select a file to upload</div> }
        </Dropzone>
        : <button onClick={this.remove.bind(this)}>Remove file</button>}
          {this.state.file ?
            <div>
              <h6>Your Event Image:</h6>
              <div>
                <img style={{maxWidth: '200px'}} src={this.state.file.preview || this.props.imageUrl} />
              </div>
            </div> : null}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({uploadImage}, dispatch);
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditImage);