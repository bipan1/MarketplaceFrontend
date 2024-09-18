import React from 'react';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css';

type Props = {
    form : any;
}
export default function MyEditor({form} : Props) {

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['link', 'image'],
            ['clean'],
        ],
    };

    const handleChange = (changeValue: string) => {
        form.setFieldsValue({description : changeValue})
    }

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'bullet',
        'indent',
        'color',
        'background',
        'align',
        'link',
        'image',
    ];

    return (
        <ReactQuill
            onChange={handleChange}
            modules={modules}
            formats={formats}
            theme="snow"
            placeholder='Enter the description'
        />
    );
}