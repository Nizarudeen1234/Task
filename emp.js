const employee=[{id:"C104",name:"mohamed",role:"junior web developer",payout:30000},
{id:"C105",name:"Nishar",role:"Full stack developer",payout:40000}];

let emp=employee.map(function(value){
    return value.id+"-"+value.name+"-"+value.role+"-"+value.payout
});
console.log(emp)