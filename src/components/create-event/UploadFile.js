import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import axios from 'axios';
import Dropzone from 'react-dropzone';

const customContentStyle = {
  width: '50%',
  maxWidth: '450px',
  textAlign: 'center'

};

const titleStyle = {
  textAlign: 'center',
  fontFamily: 'Open Sans',
  fontWeight: 'bold',
  color: '#db436c'
};

/*const dropBoxStyle = {
  height: '200px',
  width: '200px',
  margin: '0 auto',
  borderWidth: '4px',
  borderColor: '#767b91',
  borderStyle: 'dashed',
  borderRadius: '5px',
  padding: '20px'
};
*/
class UploadFile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  onDrop(files) {
    const file = files[0];
    axios.get('api/s3/sign?file_name=' +file.name+'&file_type='+file.type)
    .then((result) => {
      axios.put(result.data.signed_request, file, {
        headers: {
          'Content-Type': file.type
        }
      })
      .then((response) => {
        console.log(response);

      });
    })
    .catch((err) => {
      console.log(err.data);
    });
  }


  render() {

    return (
      <div>
        <FlatButton
          label = "Upload an Image"
          onClick = {() => this.handleOpen()}
          style = {{color: '#53b3cb'}} />
        <Dialog
          title = "Eventify"
          modal = {false}
          open = {this.state.open}
          contentStyle = {customContentStyle}
          titleStyle = {titleStyle}
          onRequestClose={this.handleClose}>
          <Dropzone
            onDrop={this.onDrop}
            size={200}>
            <div>Drag and drop an image here or click to select files to upload</div>
          </Dropzone>
        </Dialog>
      </div>
    );
  }
}

export default UploadFile;