import React,{useState} from "react";
import PhoneInput from 'react-phone-number-input'

import {Routes, Route, useNavigate} from 'react-router-dom';

import "./screen-1.css"

function App(props){
    const [value,setValue] = useState()
    // const [phone, setPhone] = useState(false);
    const [message, setMessage] = useState(false);
   
    const [form, setForm] = useState({
      name : "",
      phone : "",
      email : "",
      service : "",
      clean:"",
      quality:"",
      ratings:""
    })
    const navigate = useNavigate();
    const navigateToThankyou = () => {
      
      navigate('/thankyou');
    };
    
    const phoneNumberValidation = () => {
      const phoneregex = /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
      if(phoneregex.test(form.phone)){
        setMessage(false)
      }else if(!phoneregex.test(form.phone) && form.phone !==""){
          setMessage(true)
      }else{
        setMessage(false);
      }
    }
    const emailValidation = () => {
      const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
      if (regEx.test(form.email)) {
         setMessage(false);
         } else if (!regEx.test(form.email) && form.email !== "") {
              setMessage(true);
         } else {
             setMessage(true);
         }
    }
    // const handleevent = (e) =>{
    //     setEmail(e.target.value)
    // }




    const getRatings = (event) =>{
      if(event){
        if(event.target.name === 'service'){
            if(event.target.checked){
              setForm({...form,[event.target.name]:event.target.id})
            }else{
              setForm({...form,[event.target.name]:''})
            }
        }else if(event.target.name === 'clean'){
          console.log(event.target.name)
          if(event.target.checked){
            setForm({...form,[event.target.name]:event.target.id})
          }else{
            setForm({...form,[event.target.name]:''})
          }
        }else if(event.target.name === 'quality'){
          if(event.target.checked){
            setForm({...form,[event.target.name]:event.target.id})
          }else{
            setForm({...form,[event.target.name]:''})
          }
        }else if(event.target.name === 'ratings'){
          if(event.target.checked){
            setForm({...form,[event.target.name]:event.target.id})
          }else{
            setForm({...form,[event.target.name]:''})
          }
        }
      //  console.log(event.target.id)
        // setForm({...form,service:event.target.id})
      }
    }
    const handleSubmit=()=>{
      // console.log("Jidkel")
      if(form.name ==='' || form.phone ==='' || form.email ===''){
        alert("Please fill the details")
      }else{
        if(localStorage.getItem('data') && JSON.parse(localStorage.getItem('data')) ){
          let restaurantInfo = JSON.parse(localStorage.getItem('data'))
          restaurantInfo.push(form)
          localStorage.setItem("data",JSON.stringify(restaurantInfo))
        }
        else{
          localStorage.setItem("data",JSON.stringify([form]))
        }
      } 
    }
 
    return(
        <div className="App">
            <div className='Aromatic-bar'>
        <h2>Aromatic bar</h2>
    
      </div>

        <div>
          <div className="Total-form">
          <form>
            <div className='left-side-part'>
              <label className='customername'>Customer Name</label><i id='red-star' class="fa-sharp fa-solid fa-star-of-life"></i><br/>
              <input className='customer-name-input-box' type="text" placeholder="E.g. join snow" onChange={e => {
                setForm({...form,name:e.target.value})
              }}></input>
              <br></br>
              <label className='phone-text'>Phone</label><i id='red-star' class="fa-sharp fa-solid fa-star-of-life"></i><br/>
              <div>
              <PhoneInput placeholder="9999999999" value={form.phone} onChange={(e)=>{setForm({...form,phone:e})}}/>
             
              {message ?  <div className='error-notice'>
             <h4 className='error-text'><i id='warn-icon' class="fa-sharp fa-solid fa-circle-exclamation"></i>Please enter a vaild phone number</h4>
              </div> : null}
              </div>

              <h4>Please rate the quality of the service you received from your host.<i id='red-star' class="fa-sharp fa-solid fa-star-of-life"></i></h4>
              <div className='rating-checkbox'>
                  <div className='rating-checkbox-1'>
                    <input className='Largercheckbox' id='excellent' type="checkbox" name="service" onChange={getRatings}/>
                    <label for="Excellent">Excellent</label>
                  </div>
                  <div className='rating-checkbox-1'>
                    <input className='Largercheckbox' id='good' type="checkbox" name="service" onChange={getRatings}/>
                    <label for="Good">Good</label>
                  </div>
                  <div className='rating-checkbox-1'>
                    <input className='Largercheckbox' id='fair' type="checkbox" name="service" onChange={getRatings}/>
                    <label for="Fair">Fair</label>
                  </div>
                  <div className='rating-checkbox-1'>
                    <input className='Largercheckbox' id='bad' type="checkbox"  name="service" onChange={getRatings}/>
                    <label for="Bad">Bad</label>
                  </div>
                </div>

              <h4>Was our restaurant clean?<i id='red-star' class="fa-sharp fa-solid fa-star-of-life"></i></h4>
              <div className='rating-checkbox'>
              <div className='rating-checkbox-1'>
                  <input className='Largercheckbox' id='excellent' type="checkbox" name="clean" onChange={getRatings}/>
                  <label  for="Excellent">Excellent</label>
                </div>
                <div className='rating-checkbox-1'>
                  <input className='Largercheckbox' id='good' type="checkbox" name="clean" onChange={getRatings} />
                  <label for="Good">Good</label>
                </div>
                <div className='rating-checkbox-1'>
                  <input className='Largercheckbox' id='fair' type="checkbox" name="clean" onChange={getRatings} />
                  <label for="Fair">Fair</label>
                </div>
                <div className='rating-checkbox-1'>
                  <input className='Largercheckbox' id='bad' type="checkbox"  name="clean" onChange={getRatings}/>
                  <label for="Bad">Bad</label>
                </div>
              </div>
            </div>

            <div className='right-side-part'>
              <label className='email-text-part'>Email</label><i id='red-star' class="fa-sharp fa-solid fa-star-of-life"></i><br/>
          

              <input className='email-input-box' type="email" placeholder='E.g.abc@gmail.com' value={form.email} onChange={((e)=>{
                setForm({...form,email:e.target.value}) 
              })}></input>
             
              {message ?  <div className='error-notice'>
             <h4 className='error-text'><i id='warn-icon' class="fa-sharp fa-solid fa-circle-exclamation"></i>Please enter a vaild email</h4>
              </div> : null}

              <h4>Please rate the quality of your beverage.<i id='red-star' class="fa-sharp fa-solid fa-star-of-life"></i></h4>
                <div className='rating-checkbox'>
                  <div className='rating-checkbox-1'>
                    <input className='Largercheckbox'  type="checkbox" id="excellent" name="quality" onChange={getRatings}/>
                    <label  for="Excellent">Excellent</label>
                  </div>
                  <div className='rating-checkbox-1'>
                    <input className='Largercheckbox' type="checkbox" id="good" name="quality" onChange={getRatings} />
                    <label for="Good">Good</label>
                  </div>
                  <div className='rating-checkbox-1'>
                    <input className='Largercheckbox' type="checkbox" id="fair" name="quality" onChange={getRatings}/>
                    <label for="Fair">Fair</label>
                  </div>
                  <div className='rating-checkbox-1'>
                    <input className='Largercheckbox' type="checkbox" id="bad"  name="quality" onChange={getRatings}/>
                    <label for="Bad">Bad</label>
                  </div>
                </div>

              <h4>Please rate your overall during experience.<i id='red-star' class="fa-sharp fa-solid fa-star-of-life"></i></h4>
              <div className='rating-checkbox'>
              <div className='rating-checkbox-1'>
                  <input className='Largercheckbox'  type="checkbox" id="excellent" name="ratings" onChange={getRatings}/>
                  <label  for="Excellent">Excellent</label>
                </div>
                <div className='rating-checkbox-1'>
                  <input className='Largercheckbox' type="checkbox" id="good" name="ratings" onChange={getRatings} />
                  <label for="Good">Good</label>
                </div>
                <div className='rating-checkbox-1'>
                  <input className='Largercheckbox' type="checkbox" id="fair" name="ratings" onChange={getRatings} />
                  <label for="Fair">Fair</label>
                </div>
                <div className='rating-checkbox-1'>
                  <input className='Largercheckbox' type="checkbox" id="bad"  name="ratings" onChange={getRatings}/>
                  <label for="Bad">Bad</label>
                </div>
              </div>     
            </div>

          </form>
        </div>
      </div>
     <button className='submit-btn' onClick={()=>{
      handleSubmit();phoneNumberValidation();emailValidation();navigateToThankyou();
     }}>Submit Review</button>
     {message}
        </div>
    )
}

export default App;