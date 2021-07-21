const app = require('express')()
const PORT = process.env.PORT || 3000;

app.get("",(req,res)=>{
    res.send("Lal Pan Neela Pan")
})

app.listen(PORT,()=>{
    console.log(`heyy I M Started on ${PORT}`);
})

