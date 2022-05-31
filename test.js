
const Title = document.querySelector(".title");
const Subttitle = document.querySelector(".subtitle");
const Textarea = document.getElementById("textarea");
let Table = document.getElementById("table") ;

    

// async function comeOne(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     const json = response.json()
//     Title.innerHTML = json.title;
//     Subttitle.innerHTML = json.body;
//     Textarea.innerHTML = json.body;

//     // console.log(response);
//     // console.log(result);
// }

const comeOne = async()=>{
  const json = await (await fetch('https://jsonplaceholder.typicode.com/posts/1')).json();
    Title.innerHTML = json.title;
    Subttitle.innerHTML = json.body;
    Textarea.innerHTML = json.body;
}

comeOne();


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json2 => {
      for (let i = 0; i < json2.length; i++) {
         Table.innerHTML += `<tr>
                                <td>${json2[i].id}</td>
                                <td>${json2[i].title}</td>
                                <td>${json2[i].userId}</td>
                            </tr>`;
      }
    });