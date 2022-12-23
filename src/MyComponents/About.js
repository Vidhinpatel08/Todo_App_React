import React from 'react'

const About = () => {
  let mysty = {
    alignSelf : "center",
    width: "80%", 
    // height: "150px", 
    borderRadius: "21px 21px 0 0",
    // horizontalAlign: "middle",
    
  }
  return (
    <div className='container py-2' >
      <h3 className='mt-6 py-2 text-center' style={{color: "red"}}>ABOUT</h3>
      <hr />
      <section style={{border: "1px solid black", backgroundColor: "hwb(0deg 91% 9%)", color :"black"}}>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                  <div className="text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 py-3 mx-auto">
                      <img src="https://images.unsplash.com/photo-1624377632657-3902bfd35958?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                  
                      <h5 className="my-3 text-center">Software Developer</h5>
                    </div>
                    <div className="bg-light shadow-sm mx-auto" style={mysty}></div>
                  </div>
                  <div className="container " style={{alignSelf: "center"}}>
                    <div className="container">
                      <h3 className='my-3'>Vidhin Patel</h3>
                      <p>I am Software Developer. this is Practice Web Application which is Created by React Js.</p>
                    </div>
                  </div>
              {/* <div className="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-3 p-3">
                  <h2 className="display-5">Another headline</h2>
                  <p className="lead">And an even wittier subheading.</p> */}
                {/* </div> */}
                {/* <div className="bg-dark shadow-sm mx-auto" style={"width: 80%, height: 300px, border-radius: 21px 21px 0 0,"}></div> */}
              {/* </div> */}
        </div>
      </section>
    </div>
  )
}

export default About
