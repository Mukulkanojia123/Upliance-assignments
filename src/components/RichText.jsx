import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useDispatch, useSelector } from 'react-redux';
import { setRichTextData } from '../Store/slice/RichTextSlice';


function RichText() {
  const [value, setValue] = useState('');
  const richData = useSelector(store => store.richText.richTextData);

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 
       {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image', 'video'],
      ['clean']
    ]
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  
  const editorStyles = {
    minHeight: '500px', 
    border: '1px solid #ccc',
    padding: '10px'
  };
//   console.log(value)

  const dispatch = useDispatch();

  const handleChange = (data) =>{
    setValue(data)
    dispatch(setRichTextData(data));
  }
  return (
    <>
    <div style={{minHeight: '400px'}}> 
      <ReactQuill
        theme="snow"
        value={value}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        style={editorStyles} 
      />
         <div dangerouslySetInnerHTML={{ __html: richData }} />
    </div>
   
   
    </>
  );
}

export default RichText;
