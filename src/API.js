const Dataa=async function API(){
    const respone=await fetch("https://www.breakingbadapi.com/api/");
    const data =await respone.json();


}
export default Dataa;