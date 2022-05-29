// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

//Remove duplicate Coloer
const monicaColor =["Yellow", "Pink", "White", "Purple"]
const wendyColor = ["Blue", "Black", "Grey"]
let monicaFavColor = new Set(monicaColor)
let wendyFavColor = new Set(wendyColor)

//Remove duplicate Resto
const monicaResto = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]
const wendyResto = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]
let monicaFavResto = new Set(monicaResto)
let wendyFavResto = new Set(wendyResto)

const firstUser = {
    name: "Monica",
    gender: "female",
    age: 17,
    email: "monica@dindong.com",
    favoriteColor: [...monicaFavColor],
    isHavePet: "Yes",
    education: [{
        name: "SD 01",
        city: "Jakarta",
        graduate: "2016"
    },{
        name: "SMP 02",
        city: "Jakarta",
        graduate: "2019"
    },{
        name: "SMA 03",
        city:"Tangerang"
    }],
    favoriteRestaurant: [...monicaFavResto]
};
const secondUser = {
    name: "Wendy",
    gender: "male",
    age: 23,
    email: "wendy@dindong.com",
    favoriteColor: [...wendyFavColor],
    isHavePet: "No",
    education: [{
        name: "SD 02",
        city: "Jakarta",
        graduate: "2010"
    },{
        name: "SMP 03",
        city: "Bogor",
        graduate: "2013"
    },{
        name: "SMA 01",
        city:"Surabaya",
        graduate: "2016"
    },{
        name: "Universitas Maju",
        city: "Tangerang"
    }],
    favoriteRestaurant: [...wendyFavResto]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser)
users.push(secondUser)

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};