import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import message from "react";

function FileUploader() {
  const [file, setFile] = useState();
  const [message, setmessage] = useState();
  const inputFile = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const form = useRef();
  //   const nameRef = useRef(null);
  //   const emailRef = useRef(null);
  //   const uploadRef = useRef(null);

  const addFile = () => {
    inputFile.current.click();
  };

  const sendEmail = (e) => {
    e.preventDefault();
    //    nameRef.current.value = '';
    //    emailRef.current.value = '';
    //   uploadRef.current.value = '';

    emailjs
      .sendForm(
        "service_uog23se",
        "template_j10za1a",
        form.current,
        "u_o34Ox9L0zLMJiLp"
      )
      .then(
        (result) => {
          console.log(result.text);
          setmessage("Application submited succesfull");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div align="center">
      <div
        className="jumbotron"
        style={{ backgroundColor: "#fce4d8", height: "90vh" }}
      >
        <h1 className="display-4">Hello, Welcome!</h1>
        <h2>Thank you for choosing Career Connect</h2>
        <br />
        <p className="lead">
          This is a simple Application that guarantees a connection to your
          employer
        </p>
        <hr className="my-4" />
        <br />
        <p>
          We are glad to forward your CV to the associated employer by simply
          uploading it below. Please attach your file in PDF.
        </p>
        <br />
        <div className="message text-sm text-green-500 col-span-6">{message ? <p>{message}</p> : null}</div>
        <h4>Fill this Application form</h4>
        <p className="lead">
          <form
            ref={form}
            enctype="multipart/form-data"
            style={{ borderRadius: "1em" }}
          >
            <input type="text" name="name" placeholder="Name" />
            <br />
            <input type="text" name="email" placeholder="Email" />
            <br />
            <input
              type="file"
              name="message"
              onChange={addFile}
              style={{ backgroundColor: "#fce4d8" }}
            />

            <div>{file && `${file.name} - ${file.type}`}</div>

            <button className="btn btn-primary" onClick={sendEmail}>
              Upload
            </button>
          </form>
        </p>
      </div>
    </div>
  );
}

export default FileUploader;
