(()=>{"use strict";const e=[{id:1,name:"John Doe",age:30,email:"john@example.com",country:"USA",company:"Example Inc.",birthday:"1993-08-22"},{id:2,name:"Jane Smith",age:28,email:"jane@example.com",country:"Canada",company:"Acme Corp",birthday:"1995-02-15"},{id:3,name:"Michael Johnson",age:45,email:"michael@example.com",country:"UK",company:"Global Tech",birthday:"1978-11-10"},{id:4,name:"Sarah Williams",age:32,email:"sarah@example.com",country:"Australia",company:"Tech Innovators",birthday:"1989-05-29"},{id:5,name:"David Lee",age:28,email:"david@example.com",country:"USA",company:"Software Solutions",birthday:"1995-09-18"},{id:6,name:"Sophia Brown",age:27,email:"sophia@example.com",country:"Canada",company:"Data Analytics Ltd",birthday:"1996-04-03"},{id:7,name:"Matthew Wilson",age:39,email:"matthew@example.com",country:"UK",company:"Innovate Now",birthday:"1982-12-14"},{id:8,name:"Olivia Martinez",age:24,email:"olivia@example.com",country:"USA",company:"Digital Creations",birthday:"1999-07-07"},{id:9,name:"Daniel Johnson",age:33,email:"daniel@example.com",country:"Australia",company:"Web Builders",birthday:"1988-03-02"},{id:10,name:"Emily Clark",age:29,email:"emily@example.com",country:"Canada",company:"E-commerce Solutions",birthday:"1992-10-11"}];document.addEventListener("DOMContentLoaded",(()=>{!function(){const a=document.querySelector("#user-list");e.forEach((e=>{const n=document.createElement("li");n.classList.add("user-item");const t=document.createElement("h3");t.innerText=`Name: ${e.name}`;const m=document.createElement("p");m.innerText=`ID: ${e.id}`;const o=document.createElement("p");o.innerText=`Age: ${e.age}`;const i=document.createElement("p");i.innerText=`Email: ${e.email}`;const c=document.createElement("p");c.innerText=`Country: ${e.country}`;const r=document.createElement("p");r.innerText=`Company: ${e.company}`;const l=document.createElement("p");l.innerText=`Birthday: ${e.birthday}`,n.append(t,m,o,i,c,r,l),a.append(n)}))}()}))})();