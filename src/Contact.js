import React, { useState } from "react";

const Contact = () => {
    const [data, setData] = useState({
        fullname:"", phone:"", email:"",message:"",
    })
  
    const InputEvent=(event) =>{
        const {name, value } = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]: value,
            }               

        })
    }    
// const formSubmit = (e)=>{ 

//     e.preventDefault();
//     alert(`My name is ${data.fullname},my Contact number is ${data.phone}, my email id is ${data.email}, And message is ${data.message} `);
//    };

   const postData = async (ev) =>{
    const {fullname, phone, email, message} = data;
     ev.preventDefault();
     const respon = await fetch('https://demosite-d73ba-default-rtdb.firebaseio.com/webdataform.json',
     {method:"POST", headers:{"Contact-Type":"application/json"}, body:JSON.stringify({ 
      fullname,phone,email,message, }) });
      if(respon){
        setData({ fullname:"", phone:"", email:"",message:"",});
        alert("Data Stored");

      }

   }
    return( 
        <>
          <div className="my-1">
	<h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div ">
	<div className="row">
		<div className="col-md-6 col-10 mx-auto">
			<form onSubmit={postData} method="POST" className="form">{/*
				<form method="POST">*/}
					<div className="row">
						<div className="col-md-6 col-10">
							<div className="form-group">
								<label for="exampleFormControlInput1">Full Name</label>
								<input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Full name" pattern="[a-zA-Z][a-zA-Z ]{2,}" required />
							</div>
						</div>
						<div className="col-md-6 col-10">
							<div className="form-group">
								<label for="exampleFormControlInput1">Phone</label>
								<input type="text" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" pattern="[1-9]{1}[0-9]{9}" required maxlength="11" title="Please enter exactly 10 digits" />
							</div>
						</div>
					</div>
					<div className="form-group">
						<label for="exampleFormControlInput1">Email address</label>
						<input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required />
					</div>
					<div className="form-group">
						<label for="exampleFormControlTextarea1">Message</label>
						<textarea className="form-control" id="exampleFormControlTextarea1" name="message" value={data.message} onChange={InputEvent} rows="3" maxlength="200" required></textarea>
					</div>
					<div className="col-12 mt-3">
						<button className="btn btn-outline-primary" type="submit">Submit form</button>
					</div>
				</form>
		</div>
	</div>
</div>

        {/* <div className="contact-clean">
    <form >
        <h2 className="text-center">Contact us</h2>
        <div className="form-group"><input className="form-control" type="text" name="name" placeholder="Name"/></div>
        <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Email"/></div>
        <div className="form-group"><textarea className="form-control" name="message" placeholder="Message" rows="14"></textarea></div>
        <div className="form-group"><button className="btn btn-primary" type="submit">send </button></div>
    </form>
</div> */}
        </>
    );
    }
    export default Contact;





    