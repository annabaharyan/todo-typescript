export const convert=(time:number):string=>{
let date=new Date(time);
let year=date.getFullYear();
let month=date.getMonth()+1;
let day=date.getDate()
let hour=date.getHours();
let min:number|string=date.getMinutes();
min=min<10?"0"+min:min;
return `${year}/${month}/${day}/${hour}/${min}`
}