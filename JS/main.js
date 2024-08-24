const pElement = document.querySelector('p');
const preElement = document.querySelector("pre");
pElement.innerHTML = "Loading...";
preElement.innerHTML = "Loading...";

// get the public IP address
async function getIp() {
  let ip = "";
  await fetch("https://api.ipify.org?format=json")
  .then((Response) => Response.json())
  .then((data) => {
    const res = `Your public IP address is : ${data.ip}`;
    pElement.innerHTML = res;
    ip = data.ip;
  })
  .catch((error) =>{
    console.error("Error Fetching the IP adress", error);
  })
  return ip;
}

// get geolocation data based on the IP address
async function getDataOfUser(ip){
  return await fetch(`https://ipapi.co/${ip}/json/`)
  .then((Response) => Response.json())
  .catch((error) => {
    console.error("Error fetching the IP information:", error);
  });
}

async function getData() {
  const ip = await getIp();
  const data = await getDataOfUser(ip)
  preElement.innerHTML = JSON.stringify(data, null, 2);
  return data;
}

getData();