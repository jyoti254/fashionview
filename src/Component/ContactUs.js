import React ,{useState} from  "react";

const ContactUs=()=>{
    const [data, setData] =useState({
        FullName: "",
        Phone: "",
        msg:"",
    })
    const [newEmail, setnewEmail] = useState()

    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            }
        })
    }
    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
            `my name is ${data.FullName}. my mobile number is ${data.Phone} and my email is ${newEmail},here i wanted to say that ${data.msg}`
        )
    }
    return(
        <>
        <div className="my-5 ">
            <h1 className="contact text-center ">ContactUs</h1>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">FullName</label>
                    <input 
                    type="text"
                    className="form-control"
                      id="exampleFormControlInput1" 
                      name="FullName" 
                      value={data.FullName}
                       onChange={InputEvent}
                        placeholder="enter your fullname"/>
                    </div>

                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Phone</label>
                    <input 
                    type="tel"
                    className="form-control" 
                     id="exampleFormControlInput1" 
                     name="Phone"
                      value={data.Phone}
                      onChange={InputEvent}
                       placeholder="mobile number"/>
                    </div>

                    <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email Address</label>
                    <input type="email" 
                    className="form-control"
                     id="exampleFormControlInput1" 
                     name="Email " 
                     value={newEmail} 
                     onChange={(e)=>setnewEmail(e.target.value)} 
                     placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea 
                    className="form-control"
                     name="msg" 
                     value={data.msg} 
                     onChange={InputEvent} 
                     id="exampleFormControlTextarea1" rows="3">

                     </textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>

                            </form>
                            <footer className="f mt-5 text-center"><b>@2020 Copyright</b></footer>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default ContactUs;