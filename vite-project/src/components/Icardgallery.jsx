import React from 'react'
import Icard from './Icard'

function Icardgallery() {
    const student=[{
        college:"ABES Engineering College",
        rollno: "2400320100984",
        Name: "Sanskar Pandey",
        Branch:"CSE",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LqNGdVKHaMK_VxgONlXLEAXlnz3zqYFr-CgTw9ax2A&s=10"
    },
    {
        college:"ABES Engineering College",
        rollno: "2400320100950",
        Name: "Sahil",
        Branch:"CSE",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LqNGdVKHaMK_VxgONlXLEAXlnz3zqYFr-CgTw9ax2A&s=10"
    },
    {
        college:"ABES Engineering College",
        rollno: "2400320100990",
        Name: "Sarthak",
        Branch:"CSE",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LqNGdVKHaMK_VxgONlXLEAXlnz3zqYFr-CgTw9ax2A&s=10"
    },
    {
        college:"ABES Engineering College",
        rollno: "2400320100994",
        Name: "Sarthak garg",
        Branch:"CSE",
        pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LqNGdVKHaMK_VxgONlXLEAXlnz3zqYFr-CgTw9ax2A&s=10"
    },
]
  return (
    <div>
        {/* <Icard College='ABES Engineering College' pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LqNGdVKHaMK_VxgONlXLEAXlnz3zqYFr-CgTw9ax2A&s=10" Roll="4563" Name="sanskar" branch='cse'></Icard>
        <Icard College='ABES Engineering College'pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LqNGdVKHaMK_VxgONlXLEAXlnz3zqYFr-CgTw9ax2A&s=10" Roll="4553" Name="sahil" branch='cse'></Icard>
        <Icard College='ABES Engineering College' pic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1LqNGdVKHaMK_VxgONlXLEAXlnz3zqYFr-CgTw9ax2A&s=10"Roll="45563" Name="sarthak" branch='cse'></Icard> */}
        {/* <Icard data={student[0]} /> */}
        {
            student.map((ele)=>(
                <Icard data={ele}/>
            ))
        }
        
    </div>
  )
}

export default Icardgallery