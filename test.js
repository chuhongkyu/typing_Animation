
const Title = document.querySelector(".title");
const Subttitle = document.querySelector(".subtitle");
const Textarea = document.getElementById("textarea");
let Table = document.getElementById("table") ;

    

async function comeOne(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const result = await response.json();
    Title.innerHTML = result.title;
    Subttitle.innerHTML = result.body;
    Textarea.innerHTML = result.body;

    console.log(response);
    console.log(result);
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