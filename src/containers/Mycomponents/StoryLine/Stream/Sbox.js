import React, { Component, PropTypes } from 'react';
//import ReactQuill from 'react-quill';
//import '../../../../node_modules/quill/dist/quill.snow.css';
//import './quill.snow.css';
import { Editor } from 'react-draft-wysiwyg';
import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import uploadImageCallBack from './uploadImageCallBack';
import { ButtonToolbar, DropdownButton } from 'react-bootstrap';
import BooksTree from '../../BooksTree';

//import bold from '../../../img/SBox/bold.svg';

import './index.scss';

let list = ['15px', '55px'];
let index;
let step = 0;

class Sbox extends Component {
  constructor (props) {
     super(props);
     this.state = {
       editorText: '',
       editorState: '',
       toolbarHidden: true,
       jump: '15px'
     };
     this.onTextChange = this.onTextChange.bind(this);
     this.onEditorStateChange = this.onEditorStateChange.bind(this);
     this.showToolbar = this.showToolbar.bind(this);
   }

  onTextChange(text) {
    this.setState({ editorText: text });
  }

  onEditorStateChange(editorState) {
    this.setState({
      editorState
    });
  }

  showToolbar() {
    ++step;
    index = step % 2;
    this.setState({
      toolbarHidden: !this.state.toolbarHidden,
      jump: list[index]
     });
  }

  render() {
    const { editorState } = this.state;

    return (
      <div className="sbox">
        <Editor
           toolbarHidden={this.state.toolbarHidden}
           wrapperClassName="wrapper-sbox"
           editorClassName="editor-sbox"
           toolbarClassName="toolbar-sbox"
           editorState={editorState}
           onEditorStateChange={this.onEditorStateChange}
           placeholder="Log something..."
           toolbar={{
             options: ['inline', 'blockType', 'fontSize', 'list', 'textAlign', 'link', 'image'],
              inline: {
                options: ['bold', 'italic', 'underline', 'strikethrough']
              },
              list: {
                inDropdown: true
              },
              textAlign: {
                inDropdown: true
              },
              link: {
                inDropdown: true
              },
              image: {
                uploadCallback: uploadImageCallBack
              }
           }}
        />

        <div className="sbox-user-avatar" style={{top: this.state.jump}}>
          <a href="#"><img src="http://devianmbanks.validbook.org/cdn/460/avatar/32x32.jpg?t=1486723970" /></a>
        </div>

        <div className="sbox-footer">
          <div style={{display: 'flex'}}>
            <button className="btn-brand">Log</button>
            <ButtonToolbar>
              <DropdownButton className="bootstrap-pure-btn" bsStyle="default" title="Select Book" pullRight >
                <BooksTree />
              </DropdownButton>
            </ButtonToolbar>
          </div>
          <div style={{height: '20px', 'margin-top': '3px'}} onClick={this.showToolbar}>
            <span>More Options</span>
            <i></i>
          </div>
        </div>



        {/* <ReactQuill
           theme={'snow'}
           onChange={this.onTextChange}
           value={this.state.editorText}
           modules={Sbox.modules}
           formats={Sbox.formats}
           placeholder={this.props.placeholder}
         /> */}

        {/* <div className="sbox-main-area">
          <div className="sbox-avatar">
            <a href="#">
              <img src="http://devianmbanks.validbook.org/cdn/460/avatar/32x32.jpg?t=1486723970" />
            </a>
          </div>
          <div className="sbox-input">
            <input type="text" placeholder="Log something..." />
          </div>
        </div> */}
        {/* <div className="sbox-contols"></div>  */}
        {/* {this.props.children} */}
      </div>
    );
  }
}
// Sbox.modules = {
//   toolbar: [
//     [{ 'header': [1, 2, false] }, { 'font': [] }]
//     // ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//     // [{'list': 'ordered'}, {'list': 'bullet'},
//     //  {'indent': '-1'}, {'indent': '+1'}],
//     // ['link', 'image'],
//     // ['clean']
//   ]
// };
//
// Sbox.formats = [
//   'header', 'font', 'size',
//   'bold', 'italic', 'underline', 'strike', 'blockquote',
//   'list', 'bullet', 'indent',
//   'link', 'image'
// ];

// Sbox.toolbar = {
//   options: ['inline', 'blockType', 'fontSize', 'fontFamily', 'list', 'textAlign', 'colorPicker',
//     'link', 'embedded', 'emoji', 'image', 'remove', 'history'],
//   inline: {
//     inDropdown: false,
//     className: undefined,
//     options: ['bold', 'italic', 'underline', 'strikethrough', 'monospace', 'superscript', 'subscript'],
//     bold: { icon: bold, className: undefined },
//     italic: { icon: italic, className: undefined },
//     underline: { icon: underline, className: undefined },
//     strikethrough: { icon: strikethrough, className: undefined },
//     monospace: { icon: monospace, className: undefined },
//     superscript: { icon: superscript, className: undefined },
//     subscript: { icon: subscript, className: undefined },
//   },
//   blockType: {
//     inDropdown: true,
//     options: [ 'Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'Blockquote'],
//     className: undefined,
//     dropdownClassName: undefined,
//   },
//   fontSize: {
//     icon: fontSize,
//     options: [8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96],
//     className: undefined,
//     dropdownClassName: undefined,
//   },
//   fontFamily: {
//     options: ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'],
//     className: undefined,
//     dropdownClassName: undefined,
//   },
//   list: {
//     inDropdown: false,
//     className: undefined,
//     options: ['unordered', 'ordered', 'indent', 'outdent'],
//     unordered: { icon: unordered, className: undefined },
//     ordered: { icon: ordered, className: undefined },
//     indent: { icon: indent, className: undefined },
//     outdent: { icon: outdent, className: undefined },
//   },
//   textAlign: {
//     inDropdown: false,
//     className: undefined,
//     options: ['left', 'center', 'right', 'justify'],
//     left: { icon: left, className: undefined },
//     center: { icon: center, className: undefined },
//     right: { icon: right, className: undefined },
//     justify: { icon: justify, className: undefined },
//   },
//   colorPicker: {
//     icon: color,
//     className: undefined,
//     popClassName: undefined,
//     colors: ['rgb(97,189,109)', 'rgb(26,188,156)', 'rgb(84,172,210)', 'rgb(44,130,201)',
//       'rgb(147,101,184)', 'rgb(71,85,119)', 'rgb(204,204,204)', 'rgb(65,168,95)', 'rgb(0,168,133)',
//       'rgb(61,142,185)', 'rgb(41,105,176)', 'rgb(85,57,130)', 'rgb(40,50,78)', 'rgb(0,0,0)',
//       'rgb(247,218,100)', 'rgb(251,160,38)', 'rgb(235,107,86)', 'rgb(226,80,65)', 'rgb(163,143,132)',
//       'rgb(239,239,239)', 'rgb(255,255,255)', 'rgb(250,197,28)', 'rgb(243,121,52)', 'rgb(209,72,65)',
//       'rgb(184,49,47)', 'rgb(124,112,107)', 'rgb(209,213,216)']
//   },
//   link: {
//     inDropdown: false,
//     className: undefined,
//     popClassName: undefined,
//     options: ['link', 'unlink'],
//     link: { icon: link, className: undefined },
//     unlink: { icon: unlink, className: undefined },
//   },
//   embedded: { icon: image, className: undefined, popClassName: undefined },
//   emoji: {
//     icon: emoji,
//     className: undefined,
//     popClassName: undefined,
//     emojis: ['😀', '😁', '😂', '😃', '😉', '😋', '😎', '😍', '😗', '🤗', '🤔', '😣', '😫', '😴', '😌',
//       '🤓', '😛', '😜', '😠', '😇', '😷', '😈', '👻', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '🙈', '🙉', '🙊',
//       '👼', '👮', '🕵', '💂', '👳', '🎅', '👸', '👰', '👲', '🙍', '🙇', '🚶', '🏃', '💃',
//       '⛷', '🏂', '🏌', '🏄', '🚣', '🏊', '⛹', '🏋', '🚴', '👫', '💪', '👈', '👉', '👉', '👆', '🖕', '👇',
//       '🖖', '🤘', '🖐', '👌', '👍', '👎', '✊', '👊', '👏', '🙌', '🙏', '🐵', '🐶',
//       '🐇', '🐥', '🐸', '🐌', '🐛', '🐜', '🐝', '🍉', '🍄', '🍔', '🍤', '🍨', '🍪', '🎂', '🍰', '🍾', '🍷', '🍸',
//       '🍺', '🌍', '🚑', '⏰', '🌙', '🌝', '🌞', '⭐', '🌟', '🌠', '🌨', '🌩', '⛄', '🔥', '🎄', '🎈', '🎉',
//       '🎊', '🎁', '🎗', '🏀', '🏈', '🎲', '🔇', '🔈', '📣', '🔔', '🎵', '🎷',
//       '💰', '🖊', '📅', '✅', '❎', '💯'],
//   },
//   image: {
//     icon: image,
//     className: undefined,
//     popupClassName: undefined,
//     urlEnabled: true,
//     uploadEnabled: true,
//     alignmentEnabled: false,
//     uploadCallback: undefined,
//     defaultSize: { height: 'auto', width: '100%' },
//   },
//   remove: { icon: eraser, className: undefined },
//   history: {
//     inDropdown: false,
//     className: undefined,
//     options: ['undo', 'redo'],
//     undo: { icon: undo, className: undefined },
//     redo: { icon: redo, className: undefined },
//   }
// }

Sbox.propTypes = {
 //placeholder: PropTypes.string
};

export default Sbox;