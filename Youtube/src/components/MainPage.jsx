import React from 'react'

const MainPage = () => {

const main=[
  {id:1,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Infinix Note 12",discription:"ATC android ToTo company",view:"1.2M views",day:"2 Days ago"},
  {id:2,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",title:"My first UX design case study-This got me my first job",discription:"Saptarishi Prakash",view:"689k views",day:"1 Month ago"},
  {id:3,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true",title:"UX Design-What is it?(From AJ &Smart)",discription:"AJ&Smar",view:"1.2M views",day:"2 Days ago"},
  {id:4,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Infinix Note 12",discription:"ATC android ToTo company",view:"1.2M views",day:"2 Days ago"},
  {id:5,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true",title:"14 Advanced Tips to DesignFASTER in Figma",discription:"Mizko",view:"1.2M views",day:"2 Days ago"},
  {id:6,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-3.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(6).png?raw=true",title:"I Share My MicroSoft Experince",discription:"Pro coder",view:"900k views",day:"2 Days ago"},
  {id:7,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-5.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Mix-Mombati| Mohon Sharif | DhakaiyaDose | Mahib Ahsan ft Anika",discription:"ATC android ToTo company",view:"1.2M views",day:"2 Days ago"},
  {id:8,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true",title:"Infinix Note 12",discription:"ATC android ToTo company",view:"1.2M views",day:"2 Days ago"},
  {id:9,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Infinix Note 12",discription:"ATC android ToTo company",view:"1.2M views",day:"2 Days ago"},
  {id:10,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Infinix Note 12",discription:"ATC android ToTo company",view:"1.2M views",day:"2 Days ago"},
  {id:11,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Infinix Note 12",discription:"ATC android ToTo company",view:"1.2M views",day:"2 Days ago"},
  {id:12,img_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true",logo_url:"https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true",title:"Infinix Note 12",discription:"ATC android ToTo company",view:"1.2M views",day:"2 Days ago"}

]


  return (
    <>
    <div className="carts">
         {main.map((i)=>(
           <div key={i.id} className='container'>
           <img src={i.img_url} alt="" className='cartImg'/>
          <div className="logo">
          <img src={i.logo_url} alt="" />
          <p>{i.title}</p>
          </div>
           <div className="discription">
            <p>{i.discription}</p>
            <img src="https://raw.githubusercontent.com/PatelNeelMahesh/frontend_tasks/refs/heads/main/02.youtube-clone/assets/verified.png" className='tickMark'/>
           </div>
           <div className="time">
              <pre>{i.view}  {i.day}</pre>
            </div>
           </div>
         ))}
    </div>
    </>
  )
}

export default MainPage