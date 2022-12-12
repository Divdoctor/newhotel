let list = [
    {
        name: "Akeem Doctor",
        age: 12
    },
    {
        name: "Akeem Rokeeb",
        age: 60
    },
    {
        name: "Oladele Doctor",
        age: 43
    },
    {
        name: "Akeem Aishah",
        age: 12
    },
    {
        name: "Victor Rokeeb",
        age: 60
    },
    {
        name: "Oladele Agba",
        age: 43
    },
    {
        name: "Doctor Ogban",
        age: 10
    }
]

function search(event){
    // console.log(event.target.value);
    console.log(list.filter(e=>e.age>event.target.value))
}
document.getElementById("checkin").addEventListener('change', search);
// console.log(search('Doctor'));