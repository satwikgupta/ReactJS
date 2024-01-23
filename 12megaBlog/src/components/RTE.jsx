import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from '@react-hook-form/core'
 

function RTE({name, control, label, defaultValue ='', }) {
  return (
    <div className='w-full '> 
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

        <Controller 
            name={name || "content"}
            control={control}
            defaultValue={defaultValue}
            render={({ field: {onChange} }) => (
                <Editor 
                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 500,
                        menubar: true,
                        plugins: [
                            "image", "autolink", "lists", "charmap", "print", "preview", "anchor","advlist", "searchreplace", "visualblocks", "code", "fullscreen", "link","charmap", "insertdatetime", "media", "table", "paste", "code", "wordcount", "help",
                        ],
                        toolbar:"undo redo | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                        content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }",
                    }}
                    onEditorChange={onChange}
                />
            )}
        />
    </div>
  )
}

export default RTE