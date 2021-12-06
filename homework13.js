//exercise 1:

// const getData = async () => {
//   let data = await getDataFromServer();
//   displayData(data);
// };

// const getDataFromServer = () => {
//   return new Promise((resolve, reject) => {
//     const ajax = new XMLHttpRequest();

//     ajax.onreadystatechange = () => {
//       if (ajax.readyState === 4) {
//         if (ajax.status === 200) {
//           const usersList = JSON.parse(ajax.responseText);
//           resolve(usersList);
//         }
//         reject("Data is not available!");
//       }
//     };

//     ajax.open("GET", "https://jsonplaceholder.typicode.com/users");
//     ajax.send();
//   });
// };

// const displayData = (data) => {
//   const bodytable = document.getElementById("users-body-table");
//   let tablerows = "";

//   for (const user of data) {
//     tablerows += `
//             <tr>
//                 <td>${user.name}</td>
//                 <td>${user.username}</td>
//                 <td>${user.email}</td>
//                 <td>${user.phone}</td>
//                 <td>${user.address.city}</td>
//                 <td>${user.address.street}</td>
//                 <td>${user.zipcode}</td>
//                 <td>${user.company.name}</td>
//             </tr>
//         `;
//   }
//   bodytable.innerHTML = tablerows;
// };

//exercise 2:
// const getData = async () => {
//   userID = Number(document.getElementById("userID").value);
//   let userDetails = await getDataFromServer(userID);
//   displayData(userDetails);
// };

// const getDataFromServer = (userID) => {
//   return new Promise((resolve, reject) => {
//     const ajax = new XMLHttpRequest();

//     ajax.onreadystatechange = () => {
//       if (ajax.readyState === 4) {
//         if (ajax.status === 200) {
//           const userDetails = JSON.parse(ajax.responseText);
//           resolve(userDetails);
//         }
//         reject("Data is not available!");
//       }
//     };

//     console.log("user id is: " + userID);
//     let url = `https://jsonplaceholder.typicode.com/users/${userID}`;
//     ajax.open("GET", url);
//     ajax.send();
//   });
// };

// const displayData = (userDetails) => {
//   const bodytable = document.getElementById("users-body-table");
//   let tablerows = `
//               <tr>
//                   <td>${userDetails.name}</td>
//                   <td>${userDetails.username}</td>
//                   <td>${userDetails.email}</td>
//                   <td>${userDetails.phone}</td>
//                   <td>${userDetails.address.city}</td>
//                   <td>${userDetails.address.street}</td>
//                   <td>${userDetails.zipcode}</td>
//                   <td>${userDetails.company.name}</td>
//               </tr>
//           `;

//   bodytable.innerHTML = tablerows;
// };

//exercise 3:
// const onLoad = async () => {
//   let users = await getDataFromServer();
//   displayData(users);
// };

// const getDataFromServer = () => {
//   return new Promise((resolve, reject) => {
//     const ajax = new XMLHttpRequest();

//     ajax.onreadystatechange = () => {
//       if (ajax.readyState === 4) {
//         if (ajax.status === 200) {
//           const users = JSON.parse(ajax.responseText);
//           resolve(users);
//         }
//         reject("Data is not available!");
//       }
//     };

//     ajax.open("GET", "https://jsonplaceholder.typicode.com/users/");
//     ajax.send();
//   });
// };

// const displayData = (users) => {
//   let options = "";
//   const selector = document.getElementById("select-User");
//   for (const user of users) {
//     options += `
//         <option value="${user.id}">${user.name}</option>
//     `;
//   }
//   selector.innerHTML = options;
// };

// const displaySelectedUser = async () => {
//   let dataUser = await getDataUser();
//   displayDataUser(dataUser);
// };

// const getDataUser = () => {
//   return new Promise((resolve, reject) => {
//     const ajax = new XMLHttpRequest();

//     ajax.onreadystatechange = () => {
//       if (ajax.readyState === 4) {
//         if (ajax.status === 200) {
//           const userSelectedDetails = JSON.parse(ajax.responseText);
//           resolve(userSelectedDetails);
//         }
//         reject("Data is not available!");
//       }
//     };

//     const selector = document.getElementById("select-User");
//     let userSelectedID = selector.value;
//     console.log(userSelectedID);

//     let url = `https://jsonplaceholder.typicode.com/users/${userSelectedID}`;
//     ajax.open("GET", url);
//     ajax.send();
//   });
// };
// const displayDataUser = (dataUser) => {
//   const bodytable = document.getElementById("users-body-table");
//   bodytable.innerHTML = `
//               <tr>
//                   <td>${dataUser.name}</td>
//                   <td>${dataUser.username}</td>
//                   <td>${dataUser.email}</td>
//                   <td>${dataUser.phone}</td>
//                   <td>${dataUser.address.city}</td>
//                   <td>${dataUser.address.street}</td>
//                   <td>${dataUser.zipcode}</td>
//                   <td>${dataUser.company.name}</td>
//               </tr>
//           `;
// };

//exercise 4:
const getData = async () => {
  let picturesData = await getDataFromServer();
  displayPictures(picturesData);
};

const getDataFromServer = () => {
  return new Promise((resolve, reject) => {
    const ajax = new XMLHttpRequest();

    ajax.onreadystatechange = () => {
      if (ajax.readyState === 4) {
        if (ajax.status === 200) {
          const pictures = JSON.parse(ajax.responseText);
          resolve(pictures);
        }
        reject("Data is not available!");
      }
    };

    ajax.open("GET", "https://jsonplaceholder.typicode.com/photos");
    ajax.send();
  });
};

const displayPictures = (pictures) => {
  const tableHead = document.getElementById("tableHead");
  const bodytable = document.getElementById("users-body-table");
  tableHead.innerHTML = `
    <thead>
        <tr>
          <th>album id</th>
          <th>id</th>
          <th>title</th>
          <th>thumb nail Url</th>
        </tr>
      </thead>`;

  bodytable.innerHTML = `
                <tr>
                  <td>${pictures.albumId}</td>
                  <td>${pictures.id}</td>
                  <td>${pictures.url}</td>
                  <td>${pictures.thumbnailUrl}</td>
                  </tr>
    `;

  //   bodytable.innerHTML = `
  //               <tr>
  //                   <td>${dataUser.name}</td>
  //                   <td>${dataUser.username}</td>
  //                   <td>${dataUser.email}</td>
  //                   <td>${dataUser.phone}</td>
  //                   <td>${dataUser.address.city}</td>
  //                   <td>${dataUser.address.street}</td>
  //                   <td>${dataUser.zipcode}</td>
  //                   <td>${dataUser.company.name}</td>
  //               </tr>
  //           `;
};
