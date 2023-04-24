import app from './app'

function main(){
    let port = 3000
    try{
        app.listen(port, 'localhost', async ()=>{
            console.log(`Starting server at port ${port}`)
        })
    }catch(err){
        console.log("Starting server error", err)
    }
}

main()