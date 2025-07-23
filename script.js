let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let Cat = document.getElementById("Cat");
let search = document.getElementById("search");
let create = document.getElementById("create");
let deleteAll = document.getElementById("deleteAll");
let btnUpdate = document.getElementById("btnUpdate");

deleteAll.style.display = "none";
btnUpdate.style.display = "none";
let data;
if (localStorage.length > 0) {
  data = JSON.parse(localStorage.getItem("pro"));
} else {
  data = [];
}
let currentIndex;

const getTotal = () => {
  if (price.value !== "") {
    let res = +price.value + +taxes.value + +ads.value - (+discount.value || 0);
    total.textContent = "Total : " + res;
  } else {
    total.textContent = "Total : ";
  }
};

const clearInput = () => {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.textContent = "Total : ";
  Cat.value = "";
  count.value = "";
};

const showData = (items = data) => {
  let table = "";
  for (let i = 0; i < items.length; i++) {
    let originalIndex = data.indexOf(items[i]);
    table += `
        <tr>
            <td>${i}</td>
            <td>${items[i].title}</td>
            <td>${items[i].price}</td>
            <td>${items[i].taxes}</td>
            <td>${items[i].ads}</td>
            <td>${items[i].discount}</td>
            <td>${items[i].total}</td>
            <td>${items[i].Cat}</td>
            <td><button onclick="Del(${originalIndex})">Delete</button></td>
            <td><button type="button" onclick="update(${originalIndex})">Update</button></td>
        </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
  if (data.length > 0) {
    deleteAll.style.display = "block";
    deleteAll.textContent = `Delete All (${data.length})`;
  }
};

create.onclick = () => {
  if (!title.value || !price.value || !Cat.value) {
    alert("Please fill in all required fields (Title, Price, Category)");
    return;
  }
  let obj = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.textContent,
    Cat: Cat.value,
  };
  if (count.value > 1 && !isNaN(count.value)) {
    for (let i = 0; i < count.value; i++) {
      data.push({ ...obj });
    }
  } else {
    data.push(obj);
  }
  localStorage.setItem("pro", JSON.stringify(data));
  clearInput();
  showData();
};

const update = (i) => {
  title.value = data[i].title;
  price.value = data[i].price;
  taxes.value = data[i].taxes;
  ads.value = data[i].ads;
  discount.value = data[i].discount;
  Cat.value = data[i].Cat;
  getTotal();
  currentIndex = i;
  btnUpdate.textContent = "Update";
  btnUpdate.style.background = "#4b5563";
  btnUpdate.style.display = "block";
};

btnUpdate.onclick = function () {
  if (!price.value && !title.value && !Cat.value) {
    alert("Error");
    return;
  } else {
    data[currentIndex] = {
      title: title.value,
      price: price.value,
      taxes: taxes.value,
      ads: ads.value,
      discount: discount.value,
      total: total.textContent,
      Cat: Cat.value,
    };
  }
  localStorage.setItem("pro", JSON.stringify(data));
  showData();
  clearInput();
};

const Del = (i) => {
  data.splice(i, 1);
  localStorage.setItem("pro", JSON.stringify(data));
  showData();
};

const delAll = () => {
  data.splice(0);
  localStorage.setItem("pro", JSON.stringify(data));
  showData();
  deleteAll.style.display = "none";
};

search.onkeyup = () => {
  let filtertitle = data.filter((item) =>
    item.title.toLowerCase().includes(search.value.toLowerCase())
  );
  showData(filtertitle);
};

showData();
